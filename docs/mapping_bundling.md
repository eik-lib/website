---
id: mapping_bundling
title: Bundling
sidebar_label: Bundling
---

Eik is flexible with regards to how you decide to bundle your code for distribution with one caveat for JavaScript code. At the current time, since bare import mapping requires ESM bundler output, bundlers that do not yet output ESM such as Webpack cannot make use of bare import mapping. Since in large part, the real advantage of using Eik stems from this feature, it's best if you can use a bundler with first class ESM output support. For now, we recommend choosing Rollup or ESBuild. Next.js users are stuck with webpack which unfortunately means that for the current moment they will not be able to use bare import mapping. We hope this situation to improve in the near future.

## Bundling - an example using Rollup and PostCSS

### Install dependencies

Install the following dev dependencies...

```
npm i -D @eik/postcss-plugin @eik/rollup-plugin @rollup/plugin-commonjs @rollup/plugin-node-resolve postcss postcss-cli postcss-import rollup rollup-plugin-terser cssnano
```

### Eik.json

Ensure you have an `eik.json` file in your project root or added to `package.json` and that you have specified valid import map files in the `import-map` section.

```
{
  "name": "<name>",
  "version": "1.0.0",
  "server": "https://<your Eik server address>",
  "type": "package",
  "files": "./dist",
  "import-map": "https://<your Eik server address>/map/<your import map name>/v1"
}
```

### Rollup

Create a Rollup configuration file in the root of your project called `rollup.config.js`

```js
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import commonjs from '@rollup/plugin-commonjs';
import plugin from "@eik/rollup-plugin";

export default {
  input: 'path/to/your/script.js',
  plugins: [
      nodeResolve(),
      commonjs({ include: /node_modules/ }),
      plugin(),
      terser({ format: { comments: false } })
  ],
  output: [
      { 
          sourcemap: true,
          format: 'esm',
          file: 'dist/script.js',
      },
  ],
};
```

### Post CSS

Create a PostCSS configuration file in the root of your project called `postcss.config.js`

```js
module.exports = () => ({
    plugins: [
        require('@eik/postcss-plugin')(),
        require('postcss-import')(),
        require('cssnano')({ preset: 'default' }),
    ],
});
```

### Scripts

Add bundling scripts to your `package.json` file. Be sure to change the path to your css file entrypoint.

```json
{
  "scripts": {
    "build:css": "postcss ./path/to/styles.css > ./dist/styles.css",
    "build:js": "rollup -c",
    "build": "npm run build:js && npm run build:css",
    "watch:js": "rollup -cw",
    "watch:css": "postcss -w ./path/to/styles.css > ./dist/styles.css"
  }
}
```