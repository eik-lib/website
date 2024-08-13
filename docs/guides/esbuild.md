---
title: Using Eik with esbuild
---

This guide describes how to configure [esbuild](https://esbuild.github.io/) to use [build-time import mapping](/docs/introduction/workflow#build-time-import-mapping). The guide assumes you have an `eik.json` containing at least one [`"import-map"`](/docs/reference/eik-json#import-map).

## Getting started

Install [`@eik/esbuild-plugin`](https://github.com/eik-lib/esbuild-plugin#readme), and `esbuild` if you haven't already.

```sh
npm install --save-dev esbuild @eik/esbuild-plugin
```

## Configure your build

Create a `build.js` file or extend your existing build script to add the Eik plugin.

```js
import * as eik from "@eik/esbuild-plugin";
import esbuild from "esbuild";

const options = /** @type {esbuild.BuildOptions}*/ ({
	entryPoints: ["./src/index.js"],
	outdir: "./public",
	format: "esm",
	platform: "browser",
	target: ["es2017"],
	bundle: true,
	sourcemap: true,
});

const watch = process.argv.includes("--dev");
if (watch) {
	let ctx = await esbuild.context(options);
	await ctx.watch();
	console.log("[esbuild] watching...");
} else {
	// Use the Eik plugin to to import mapping for the production build
	// Load the import maps listed in eik.json from the Eik server
	await eik.load();
	await esbuild.build({
		...options,
		plugins: [eik.plugin()],
	});
}
```

## Run your build

Add these scripts to `package.json` if you haven't already.

```json
{
	"scripts": {
		"build": "node ./build.js",
		"dev": "node ./build.js --dev"
	}
}
```

Now you can run a production build using the Eik plugin by running this command.

```sh
npm run build
```

## Advanced usage

See the [plugin documentation](https://github.com/eik-lib/esbuild-plugin#api) for advanced options on loading import maps.
