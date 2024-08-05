---
title: Getting started using Eik
sidebar_label: Getting started using Eik
---

In the [introduction](/docs/introduction/) you learned:

- how Eik improves perfomance by sharing ES modules
- how to maximise performance with aliases
- how to work with bare imports and import mapping

In this document you will learn more about the workflow for setting up Eik in your application, doing build-time import mapping, and how to publish your application to Eik.

## Preparing to use Eik

:::tip

If your organisation doesn't have a running Eik server yet, hop on over to [the server documentation](/docs/server).

:::

To use Eik, first we need an `eik.json` configuration file. Use the [Eik CLI](/docs/reference/at-eik-cli) to generate one in your current directory. It should be in the same directory as `package.json`.

```sh
npx @eik/cli init
```

If you prefer, you can also [configure Eik in `package.json`](/docs/reference/eik-json#defining-eik-configuration-in-a-packagejson-file). We'll assume you use `eik.json` for the rest of this guide, but whenever these docs mention `eik.json` it applies to `"eik"` in `package.json` as well.

Open `eik.json` and fill in these details:

- `name`
- `version`
- `server`
- `files` (paths relative to `eik.json`)
- `import-maps`

```json
{
	"name": "my-app",
	"version": "1.0.0",
	"server": "https://eik.store.com",
	"files": ["./public"],
	"import-maps": ["https://eik.store.com/map/store/v1"]
}
```

You'll probably find your organisation's import maps in a shared repository. See [Managing dependencies](/docs/dependencies/import-maps/) if you don't have any import maps yet.

## Build-time import mapping

:::tip

If all your target browsers [support import maps natively](https://caniuse.com/mdn-html_elements_script_type_importmap) you can skip this section and use those instead.

:::

As support for import maps in the browser matures you may want to do build-time import mapping and ship ES modules with absolute import strings to the browser.

![Workflow of build-time import mapping, from source code to running in the browser.](/img/workflow_ahead_of_time_mapping.min.svg)

To apply import maps at build-time you need a build tool. Eik includes plugins for common build tools, and they all work much the same way.

- Look for [eik.json](#preparing-to-use-eik) to find the URL of the Eik server.
- Fetch the configured import maps from the Eik server.
- Attach to the build process in some way.
- When a bare import is discovered that matches an import map, replace that import with the Eik URL.

See the Guides section for several examples. When the build is done you should see references to your Eik server in the built JavaScript.

## Publish your application to Eik

The next step is publishing the built application to Eik.

Strictly speaking, this is optional. You can host your client-side assets elsewhere and only use Eik for shared dependencies and import maps. Still, there are some benefits to hosting your application code on Eik.

- There is only one asset server to manage.
- You can reuse the same HTTP/2 connection for dependencies and application code.
- Your application code is versioned and immutable, and can be cached "forever".

You can upload using the [Eik CLI](/docs/reference/at-eik-cli), or using [Semantic Release](https://github.com/eik-lib/semantic-release) (which versions automatically). This example uses the CLI.

First, update the version in `eik.json`.

```sh
eik version
```

By default `eik version` increments the patch number in [semantic versioning](https://semver.org/). You can increment the minor and major versions with an additional argument.

```sh
eik version minor
```

Commit the updated version to your repo. Ensure you have built the assets you want to publish.

Once you're ready, login in to the Eik server and publish. These steps can be done on your continuous integration servers if you prefer.

```sh
eik login --key YOUR_EIK_KEY
eik publish
```

:::note

The examples above assumes you installed the Eik CLI using `npm install --global @eik/cli`.

:::

The Eik server will calculate integrity hashes, and the CLI stores these in `./.eik/integrity.json`. These hashes can be used for [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity).

## Linking to your assets from HTML

Once your assets are published to Eik, URLs to the assets can be derived from the fields in `eik.json`.

Here's our example `eik.json` again.

```json
{
	"server": "https://eik.store.com",
	"name": "my-app",
	"version": "1.0.0",
	"files": ["./public"],
	"import-maps": ["https://eik.store.com/map/store/v1"]
}
```

Say our `./public` directory has a file `app.js`. After publishing we can reference that file like so.

```html
<!-- server + "/pkg/ + name + "/" + version + "/" + filename.ext  -->
<!-- assuming ./public/app.js exists when publishing -->
<script src="https://eik.store.com/pkg/my-app/1.0.0/app.js"></script>
```

### `@eik/node-client`

You likely want to use a different URL when developing, and only point to Eik in production. Since this is a common operation, Eik includes a [module for Node apps that helps generate these links](https://github.com/eik-lib/node-client#readme).

```js
import Eik from "@eik/node-client";

const development = process.env.NODE_ENV === "development";

const client = new Eik({
	base: "/public", // this base path will only be used if development is true
	development,
});
await client.load(); // load the config from eik.json

if (development) {
	// set up your app to serve local versions from disk on /public,
	// for instance with serve-static
}

// value will point to /public/app.js if development is true,
// and https://eik.store.com/pkg/my-app/1.0.0/app.js otherwise
const { value, integrity } = client.file("/app.js");
const scriptTag = `<script type="module" src="${value}" integrity="${integrity}"></script>`;
```

## Next steps

Congratulations! You've taken steps to make your application more performant by sharing ES modules in the browser.

At this point you may go forth and code, but if you'd like you can learn about

- publishing shared dependencies to Eik
- gathering shared dependencies in import maps
