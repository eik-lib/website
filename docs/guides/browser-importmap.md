---
title: Browser import mapping
---

This document describes how to do [import mapping in the browser](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap#description) and still [use import maps hosted on Eik](/docs/dependencies/import-maps). That way a map can be updated on Eik and rolled out to applications without code changes or redeploys.

:::tip

Check [browser support for import maps](https://caniuse.com/mdn-html_elements_script_type_importmap) (or use a [polyfill](https://github.com/guybedford/es-module-shims#readme)) before you decide to use this approach. Eik has several plugins to do [import mapping at build-time](/docs/introduction/workflow#build-time-import-mapping) in order to support browsers that don't natively support import maps.

:::

## Differences from build-time mapping

![Workflow of build-time import mapping, from source code to running in the browser.](/img/workflow_ahead_of_time_mapping.min.svg)

Build-time import mapping happens on the developer machine (or on continuous integration services like GitHub Actions). The build step fetches import maps from the Eik server, and the built JavaScript and CSS assets have the mapped values hard-coded.

![Workflow when using browser import mapping](/img/workflow_browser_mapping.min.svg)

Browser import mapping, on the other hand, happens at runtime in the user's browser.

With this setup you don't need a build step or plugin in order to use Eik. Depending on your source code and target browsers you may skip the build step entirely, and upload source code directly.

:::info Mind the bundling

If you do use a build step, make sure you don't end up bundling the dependencies hosted on Eik.

:::

## Configure import maps

The configuration in `eik.json` is the same whether you use build-time or browser import maps.

We'll be using the example import map we made in [Import maps](/docs/dependencies/import-maps). The map looks like this, and is hosted on our imaginary Eik server at `https://eik.store.com/map/store/v1`.

```json
{
	"imports": {
		"date-fns": "https://eik.store.com/npm/date-fns/v3/index.js",
		"lodash": "https://eik.store.com/npm/lodash/v4/index.js"
	}
}
```

That import map is added to our [`eik.json`](/docs/reference/eik-json#import-map) like so.

```json
{
	"server": "https://eik.store.com",
	"name": "my-app",
	"version": "1.0.0",
	"files": "./public",
	"import-map": ["https://eik.store.com/map/store/v1"]
}
```

## Download maps from Eik

To get updates and avoid duplication we want to download the maps from Eik rather than have them hard-coded in our app. [`@eik/node-client`](/docs/reference/at-eik-node-client) is a utility that helps with this.

Install `@eik/node-client` if you haven't already.

```sh
npm install @eik/node-client
```

Then create a new instance. Make sure to configure `loadMaps: true`. When you call the `load` function `@eik/node-client` reads your configuration and fetches the listed import maps from the Eik server. Read the maps using the [`maps`](/docs/reference/at-eik-node-client#maps) function.

```js
const eik = new Eik({
	loadMaps: true,
});
await eik.load();

const maps = eik.maps();
```

Now that the maps are loaded we can use them to build the import map we'll send to the browser.

## Send import maps to the browser

Since your configuration can include several import maps the result from `eik.maps()` is a list of import maps. In our example it looks like this.

```json
[
	{
		"imports": {
			"date-fns": "https://eik.store.com/npm/date-fns/v3/index.js",
			"lodash": "https://eik.store.com/npm/lodash/v4/index.js"
		}
	}
]
```

The list can be transformed to the import map that gets sent to browsers like so. The `reduce` function combines a list of import maps to one import map. In case of name collisions the last item wins.

```js
const maps = eik.maps();
const combined = maps.reduce((map, acc) => ({ ...acc, ...map }), {});

const html = `
<script type="importmap">
${JSON.stringify(combined, null, 2)}
</script>
`;
```

In the example above, `html` is a string that looks like this.

```html
<script type="importmap">
	{
		"imports": {
			"date-fns": "https://eik.store.com/npm/date-fns/v3/index.js",
			"lodash": "https://eik.store.com/npm/lodash/v4/index.js"
		}
	}
</script>
```

Place the import map HTML before any other `<script>` that uses the import map in your server's response.

## Update the import maps periodically

Using [aliases](/docs/dependencies/import-maps#update-your-import-map), import maps can be updated without needing a configuration change, or even a redeploy.

To get updates without redeploying, [set up an interval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) that calls [`load`](/docs/reference/at-eik-node-client#async-load) periodically. Make sure to call `maps` inside a request handler.

```js
import Eik from "@eik/node-client";
import fastify from "fastify";

const app = fastify();

const eik = new Eik({
	loadMaps: true,
});
await eik.load();

const updateMaps = setInterval(async () => {
	await eik.load();
}, 1_200_000); // 20 minutes

app.addHook("onClose", () => {
	clearInterval(updateMaps);
});

app.get("/", async (req, reply) => {
	const maps = eik.maps();
	const combined = maps.reduce((map, acc) => ({ ...acc, ...map }), {});

	const html = `
<script type="importmap">
${JSON.stringify(combined, null, 2)}
</script>
`;
});
```
