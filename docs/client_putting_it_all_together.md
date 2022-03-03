---
id: client_putting_it_all_together
title: Putting It All Together
sidebar_label: Putting It All Together
---

Aliases can be used with application packages, NPM packages and import maps to make it easier to update versions without the need to update and redeploy applications.

In the following example, the `@podium/browser` package will be set up as a dependency that multiple page bundles can include without the module being inlined (and therefore duplicated).

## Setting up the @podium/browser dependency

The first step is to create a version of the module that you are happy publishing to Eik. Since `@podium/browser` is already using ESM, we won't need to transpile the source code at all but we will still want to bundle up all the projects files into a single file before publishing the module to the Eik server.

To do this we:

### Create a new Node.js project

Create a new directory for the project

```
mkdir podium-browser
cd podium-browser
```

Initialise the Node app

```
npm init -f
```

### Add @podium/browser as a dependency

```
npm install @podium/browser
```

### Add Eik config to `package.json`

Set the `package.json` name and version to match `@podium/browser` and add some Eik configuration under the `eik` key.

```json
{
    "name": "@podium/browser",
    "version": "1.2.1",
    "eik": {
        "server": "https://myeikserver.com",
        "files": "./dist",
        "type": "npm"
    }
}
```

### Run a build to bundle up @podium/browser into a single file

We can use Rollup to bundle up the code from `@podium/browser` into a single file and place it into the `dist` directory ready for upload like so:

```
npx rollup -f es -o ./dist/index.js ./node_modules/@podium/browser/src/index.js
```

N.B. We ensure that ESM is preserved with the `-f es` flag.

### Publishing

Run:

```
eik publish
```

Once complete, `@podium/browser` should then be available on the Eik server at:

```
https://myeikserver.com/npm/@podium/browser/1.2.1/index.js
```

### Alias NPM package

Next, we need to create an alias pointing to the exact version of `@podium/browser` that we published to Eik. In this case, `1.2.1` will be aliased to `v1`.

```sh
eik npm-alias @podium/browser 1.2.1 1
```

An alias for `@podium/browser` should now be available at `https://myeikserver.com/npm/@podium/browser/v1/index.js`

## Creating an import map to use in the application

Create an import map JSON file that uses the `podium/browser` alias `v1` rather than the exact version so that if we need to update the module, it wont be necessary to update the import map.

```json
{
    "imports": {
        "@podium/browser": "https://myeikserver.com/npm/@podium/browser/v1/index.js"
    }
}
```

And then publish the import map to the Eik server

```sh
eik map my-map 1.0.0 ./import-map.json
```

The import map should now be available at `https://myeikserver.com/map/my-map/1.0.0`

### Alias import map

Create an alias of the import map for use when packaging application code.

```sh
eik map-alias my-map 1.0.0 1
```

An alias for the import map `my-map` version `1.0.0` should now be available at `https://myeikserver.com/map/my-map/v1`

## Setting up the application

### Create an eik.json file

Create an `eik.json` file describing the apps asset setup and enter the import map alias URL so that plugins can use it to replace bare imports with Eik URLs.

```json
{
    "server": "https://myeikserver.com",
    "name": "my-app",
    "version": "1.0.0",
    "files": "./dist",
    "import-map": "https://myeikserver.com/map/my-map/v1"
}
```

### Bundle local code

This assumes you are already familiar with using Rollup and the instructions here only show how to augment an existing setup.

Add `@eik/rollup-plugin` to your rollup config file

```sh
npm install -D @eik/rollup-plugin
```

```js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import eik from '@eik/rollup-plugin';

export default {
    input: './src/index.js',
    output: {
        file: './dist/index.js',
        format: 'es',
        sourcemap: true,
    },
    plugins: [
        eik(),
        resolve(),
        commonjs(),
        babel(),
    ],
};
```

*n.b.* The `files` field in `eik.json` is set to read `./dist/index.js` which is produced by the rollup build.
Also note that you are not required to use Rollup at all. You could use Esbuild or Webpack for example.

### Publish bundled code to the Eik server

```sh
eik publish
```

## Consuming an application bundle

The application bundle can be included in an HTML page using a script tag like so

```html
<script src="https://myeikserver.com/pkg/my-app/1.0.0/index.js" type="module" defer></script>
```

Any bare references to `@podium/browser` will have been replaced with absolute URLs to the Eik server.