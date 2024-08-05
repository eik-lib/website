---
title: Using Eik with PostCSS
---

This guide describes how to configure [postcss](https://postcss.org/) to use [build-time import mapping](/docs/introduction/workflow#build-time-import-mapping) for your CSS. The guide assumes you have an `eik.json` containing at least one [`"import-map"`](/docs/reference/eik-json#import-map).

## Getting started

Install [`@eik/postcss-plugin`](https://github.com/eik-lib/postcss-plugin#readme), and `postcss` if you haven't already.

```sh
npm install --save-dev postcss postcss-cli @eik/postcss-plugin
```

## Configure your build

Create `postcss.config.js` or extend your existing config to add the Eik plugin.

```js
import eik from "@eik/postcss-plugin";

/** @type {import('postcss-load-config').Config} */
export default {
	map: true,
	plugins: [eik()],
};
```

You can also use the JavaScript API for postcss.

```js
import fs from "node:fs";
import path from "node:path";
import eik from "@eik/postcss-plugin";
import postcss from "postcss";

const from = "css/input.css";
const to = "public/output.css";

const css = fs.readFileSync(path.join(process.cwd(), from), "utf-8");

postcss()
	.use(eik())
	.process(css, {
		from,
	})
	.then((result) => {
		fs.writeFileSync(path.join(process.cwd(), to), result.css, "utf-8");
	});
```

## Run your build

Assuming you use `postcss-cli` and `postcss.config.js`, add these scripts to `package.json` if you haven't already.

```json
{
	"scripts": {
		"build": "postcss src/input.css --output ./public/output.css --config ./postcss.config.js",
		"dev": "npm run build -- --watch"
	}
}
```

## Advanced usage

- See [the plugin documentation](https://github.com/eik-lib/postcss-plugin?tab=readme-ov-file#options) for advanced configuration of import maps.
- See [postcss-cli](https://github.com/postcss/postcss-cli) for available options.
- See [postcss](https://github.com/postcss/postcss) for integrations with other build tools.
