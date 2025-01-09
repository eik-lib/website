---
title: Using Eik with Rollup
---

This guide describes how to configure [Rollup](https://rollupjs.org/) to use [build-time import mapping](/docs/introduction/workflow#build-time-import-mapping). The guide assumes you have an `eik.json` containing at least one [`"import-map"`](/docs/reference/eik-json#import-map).

## Getting started

Install [`@eik/rollup-plugin`](https://github.com/eik-lib/rollup-plugin#readme), and `rollup` if you haven't already.

```sh
npm install --save-dev rollup @eik/rollup-plugin
```

## Configure your build

Create `rollup.config.js` or extend your existing config to add the Eik plugin.

```js
import eik from "@eik/rollup-plugin";

export default {
	input: "source/main.js",
	plugins: [eik()],
	output: {
		file: "build.js",
		format: "esm",
	},
};
```

## Run your build

Add this script to `package.json` if you haven't already.

```json
{
	"scripts": {
		"build": "rollup --config"
	}
}
```

Now you can run a production build using the Eik plugin by running this command.

```sh
npm run build
```

## Advanced usage

See the [plugin documentation](https://github.com/eik-lib/rollup-plugin#description) for advanced options on loading import maps.

## Vite compatibility

See [Using Eik with Vite](/docs/guides/vite/).
