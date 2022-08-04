---
id: client_npm_packages
title: NPM scoped Packages
sidebar_label: NPM Scoped Packages
---

One task you may wish to perform is to take packages that have been published to NPM and create and serve ESM friendly versions for use as across your team or organisation.

When combined with Eik's aliasing feature, this gives you a powerful way to manage dependency versions across multiple applications.

## The eik type field

The only difference from publishing application packages is the use of an `npm` namespace which can be set using the `type` field in `eik.json` or the `package.json` `eik` field.

```json
{
    "type": "npm"
}
```

## Publishing

Once the type field has been set, simply run the `eik publish` command as you would usually.

```
eik publish
```

### Server URLs

Package URLs follow a specific format which are predictable so you can import any published packages into your application code via its URL.

#### Package URL format

```
http(s)://<server origin>/npm/<package name>/<package version>/index.js
```

#### ESM Imports

```js
import lodash from 'https://myeikserver.com/npm/lodash/4.17.15/index.js'
```