---
title: Using Eik with Webpack
---

:::warning

Webpack by default does not output ECMAScript modules (ESM). Eik is designed around ESM. Your Webpack build [must output ESM](https://webpack.js.org/configuration/output/#outputmodule).

:::

This guide describes how to configure [Webpack](https://webpack.js.org/) to use [build-time import mapping](/docs/introduction/workflow#build-time-import-mapping). The guide assumes you have an `eik.json` containing at least one [`"import-map"`](/docs/reference/eik-json#import-map).

## Getting started

Install [`@eik/webpack-plugin`](https://github.com/eik-lib/webpack-plugin#readme), and `webpack` if you haven't already.

```sh
npm install --save-dev webpack webpack-cli @eik/webpack-plugin
```

## Configure your build

Create `webpack.config.js` or extend your existing config to add the Eik plugin.

```js
export default {
	entry: "./src/input.js",
	output: {
		environment: {
			// Eik requires ESM output
			module: true,
		},
		filename: "bundle.js",
		path: "./public/",
	},
	experiments: {
		// Eik requires ESM output
		outputModule: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: "@eik/webpack-plugin",
				},
			},
		],
	},
};
```

## Run your build

Add this script to `package.json` if you haven't already.

```json
{
	"scripts": {
		"build": "webpack",
		"dev": "webpack --watch"
	}
}
```

Now you can run a production build using the Eik plugin by running this command.

```sh
npm run build
```

## Advanced usage

See the [plugin documentation](https://github.com/eik-lib/webpack-plugin#description) for advanced options on loading import maps.
