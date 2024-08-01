---
id: client
title: Publishing to Eik
sidebar_label: Publishing to Eik
---

This document explains how to get started publishing a new module to an existing [Eik server](/docs/server/) using the [Eik CLI](/docs/reference/eik-cli/).

The guide assumes you have the `eik` command available in your shell. See [Install and run commands](/docs/reference/eik-cli/#install-and-run-commands) for other options.

## Configuration

The Eik CLI needs to know what files to publish and where to publish them. To do so it looks for either:

- An `eik.json` file in the same directory as `package.json`
- The `"eik"` key in `package.json`

To generate an `eik.json` file in the current directory run `eik init`.

```sh
eik init
```

Set the URL to your Eik server as the `server` property. See [the server docs](/docs/server) if you need to set up a server.

### Configure which files to publish

Set the `files` property of `eik.json` with paths to client side
asset files or directories in your project relative to the `eik.json` file.

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "server": "https://assets.myserver.com",
  "files": "./public"
}
```

## Publish

Run publish to publish your assets to the server

```sh
eik publish
```

## Next steps

### Publishing shared dependencies

Shared dependencies can be published to Eik in a similar way as your app code, by creating a small project with an `eik.json`. We recommend setting `"type": "npm"` for external modules you don't control.

For instance, you might decide that all teams across your organisation should use the same version of `lodash` via a published URL (rather than each team bundling their own version).

To do so you would need two things:

- `package.json`
- A build script to bundle the dependency as ESM

```json
{
  "name": "@my-org/lodash",
  "version": "4.17.21",
  "type": "module",
  "scripts": {
    "build": "node ./esbuild.js"
  },
  "dependencies": {
    "lodash": "4.17.21"
  },
  "devDependencies": {
    "esbuild": "0.23.0"
  },
  "eik": {
    "name": "lodash",
    "type": "npm",
    "server": "https://assets.my-org.com",
    "files": "dist"
  }
}
```

In this example we use [esbuild](https://esbuild.github.io/) to prepare the files for Eik, but you can choose your own method to get publishable assets in the `dist/` folder.

```js
// esbuild.js
import { createRequire } from "node:module";
import esbuild from "esbuild";

const { resolve } = createRequire(import.meta.url);

await esbuild.build({
  entryPoints: [resolve("lodash")],
  bundle: true,
  minify: true,
  format: "esm",
  outfile: "dist/index.js",
  target: ["es2017"],
  sourcemap: true,
});
```

With this, you would run:

- `npm run build`
- `eik publish`

After running this, an esm friendly version of lodash will be available at the url `https://assets.my-org.com/npm/lodash/4.17.21/index.js`.

It's now possible for each team to reference this globally published module directly in their
own client side code as follows:

```js
import lodash from `https://assets.my-org.com/npm/lodash/4.17.21/index.js`;
```

This has the benefit that if all teams are referencing lodash in this way, the browser will cache the module the first time it encounters it and on subsequent pages will not need to download it again.

### Aliasing published modules

Aliasing allows you to tag specific published versions of modules with a more general tag or version that you are also able to centrally change as needed.

The benefit of this is that you can alias a specific version of a dependency and then update that alias overtime as you publish new versions of the dependency and have all dependents immediately receive the change.

#### Example use case

Taking the previous example 1 step further, before we saw that we could globally publish a specific version of lodash, in this case `4.17.21`.

We can now set a major semver alias for this version:

```sh
eik alias lodash 4.17.21 4
```

We can now change our import statement to:

```js
import lodash from `https://assets.my-org.com/npm/lodash/v4/index.js`;
```

and everything will work as before.

When a new version of lodash comes out, update the version numbers in `package.json` and repeat the steps.

In this way, no client side code will need to be updated to reflect this change and it is considerably easier for multiple teams to stay in sync, using the same global shared dependency

### Using import maps to map bare imports

Import maps are [an emerging standard](https://github.com/WICG/import-maps) and a way to map "bare imports" such as `foo` in the import statement `import { bar, baz } from 'foo'` to modules to be loaded. With Eik, we provide a way to upload import map files and to specify them for use in bundling. Doing so allows you to specify a common set of shared modules, whether they be `react` or `lit-html` etc.

Making use of import maps is done as follows.

1. Define an import map json file
2. Use the Eik CLI to upload the import map to the server
3. Specify the URL to your import map file(s) in your `eik.json` file
4. Use the `publish` commands, your import maps will be used to map bare imports in your code to the URLs you have defined in your import maps

#### Import maps, an example

Given the following import map file `import-map.json`

```json
{
  "imports": {
    "lit-html": "https://assets.my-org.com/lit-html/v1/index.js",
    "lodash": "https://assets.my-org.com/lodash/v4/index.js"
  }
}
```

The following command will upload the import map file `./import-map.json` in the current directory using the name `my-import-map` and the version `1.0.0`

```sh
eik map my-import-map 1.0.0 ./import-map.json
```

Given the following line now added to `eik.json`

```json
{
  "import-map": ["https://assets.my-org.com/map/my-import-map/1.0.0"]
}
```

When we run `eik publish` any bare imports refering to either `lit-html` or `lodash` will be mapped to the URLs in our map.

In this way, you can control which version of `react` or `lit-html` or `lodash` all your apps are using. In combination with package `alias` URLs, you have a powerful way to manage key shared dependencies for your apps in production without the need to redeploy or rebundle when a new version of a dependency is released.

### Accessing meta information about a package

It's possible to access information about a published package with the `meta` command. The command
returns information in JSON format.

#### Example

```sh
eik meta lodash 4.17.21
```
