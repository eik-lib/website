---
title: "Publishing to the npm namespace"
sidebar_label: npm packages
---

Eik's main purpose is hosting shared ES modules. In this document you'll learn how to:

- publish a module from the npm registry to your Eik server
- how to update an existing module
- create an alias that can be updated as you publish new patch or minor versions of the same module

## Preparing an npm module for Eik

The `npm` namespace on Eik works the same way as for application code. Like you did when you [prepared your application for Eik](/docs/introduction/workflow#preparing-to-use-eik), you will need:

- ESM code that can run in the browser
- an `eik.json`

Not all modules published to npm are ESM, and not all ES modules published to npm can run in the browser as-is. In other words, you will probably also need a build step.

### Create a package

First, let's get the module from npm. Create a new directory and add a `package.json` to it. Then install the module you want to share on the Eik server.

Let's use `lodash` as an example.

```sh
mkdir lodash
cd lodash
npm init -y
npm install lodash
```

At this point your `lodash/` folder should contain the following:

- a `node_modules` directory containing the `lodash` module
- `package.json` with `lodash` listed as a dependency
- `package-lock.json`

### Configure Eik

The next step is to create `eik.json`.

```sh
eik init
```

Open the newly created `eik.json` and fill out the required fields.

```json
{
	"name": "lodash",
	"type": "npm",
	"version": "4.17.21",
	"server": "https://eik.store.com",
	"files": {}
}
```

:::tip

If your organisation doesn't have a running Eik server yet, hop on over to [the server documentation](/docs/server).

:::

You should also use [import maps] if your dependency has dependencies of its own that are hosted on Eik.

Now, what to put in `"files"`? Technically there's nothing stopping you from pointing `eik.json` to files inside `node_modules`. If your dependency is ESM and ready to run in the browser, that's totally valid.

```json
{
	"name": "my-dep",
	"type": "npm",
	"version": "1.0.0",
	"server": "https://eik.store.com",
	"files": "./node_modules/my-dep/dist/"
}
```

In many cases though, you're going to need a build step.

### Build an ESM version

As with application code, you should build npm packages for Eik using a build tool with an Eik plugin so you can take advantage of [import maps]. In this example we'll be using [esbuild](https://esbuild.github.io/) with the [Eik esbuild plugin](https://github.com/eik-lib/esbuild-plugin#readme).

```
npm install --save-dev esbuild @eik/esbuild-plugin
```

Create a new file `build.js` and configure esbuild to use the Eik plugin.

```js
import { createRequire } from "node:module";
import * as eik from "@eik/esbuild-plugin";
import esbuild from "esbuild";

await eik.load();

const { resolve } = createRequire(import.meta.url);

await esbuild.build({
	plugins: [eik.plugin()],
	entryPoints: [resolve("lodash")],
	outfile: "dist/index.js",
	target: ["es2017"],
	format: "esm",
	bundle: true,
	minify: true,
	sourcemap: true,
});
```

Add a build script to your `package.json`.

```json
{
	"name": "lodash",
	"type": "module",
	"private": true,
	"scripts": {
		"build": "node build.js"
	},
	"dependencies": {
		"lodash": "4.17.21"
	},
	"devDependencies": {
		"@eik/esbuild-plugin": "1.1.47",
		"esbuild": "0.23.0"
	}
}
```

Now you can run `npm run build` and you should see a `dist/` folder with some JavaScript.

### Publish the built ESM

Let's update the `"files"` field in `eik.json` to include the files we built.

```json
{
	"name": "lodash",
	"type": "npm",
	"version": "4.17.21",
	"server": "https://eik.store.com",
	"files": "./dist/"
}
```

Now you can log in to the Eik server and publish, same as when publishing an application.

```sh
eik login --key YOUR_EIK_KEY
eik publish
```

At this point the shared ESM version of lodash should be available on `https://eik.store.com/npm/lodash/4.17.21/index.js`.

:::tip

You should keep `package.json`, `eik.json` and the build script in version control so you don't have to recreate this setup when there are updates.

:::

## Get information about a published package

To view publish information, you can use the `eik meta` command.

```sh
eik meta lodash
```

## Updating a published package

New versions of the module need to be published to the Eik server, either manually or with automation like Renovate or Dependabot. Whether you choose to automate or have a manual process, these are the steps to update a module.

1. Update the dependency in `package.json` and install
2. Update the version number in `eik.json`
3. Run the build script
4. Publish to the Eik server

Keeping with our `lodash` example, say it's been updated to `4.18.0`. First you would update the dependency in `package.json`.

```diff
{
	"dependencies": {
-		"lodash": "4.17.21"
+		"lodash": "4.18.0"
	},
}
```

Then similarly update the version number in `eik.json`.

```diff
{
-	"version": "4.17.21",
+	"version": "4.18.0",
}
```

Run `npm install` to download the updated module, then rerun the build with `npm run build`.

```sh
npm install
npm run build
```

Commit the updated files.

Now you can publish the updated module to Eik.

```sh
eik login --key YOUR_EIK_KEY
eik publish
```

## Next steps

Now that you have seen how to publish different versions of a shared dependency to Eik it's time to set up an alias.

[import maps]: /docs/dependencies/import-maps
