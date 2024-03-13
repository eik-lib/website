---
id: client_npm_packages
title: ESM Friendly NPM Packages
sidebar_label: NPM Packages
---

One task Eik can be used for is to serve packages that have been published to NPM as served, ESM friendly versions for you to use in your app packages.

This is similar to what [unpkg](https://unpkg.com/) and [pika](https://www.pika.dev/) do except that by serving these directly from Eik you are not dependent on a third party service and you can maintain more fine grained control over package versioning.

When combined with Eik's aliasing feature, this gives you a powerful way to manage dependency versions across multiple applications.

## The eik type field

While not strictly necessary, to avoid clashes with your own app packages, Eik provides a namespace specifically for NPM packages. To use this `npm` namespace, simply set the `type` field in `eik.json` to `npm` like so:

```json
{
    "name": "lit",
    "server": "https://assets.myserver.com",
    "version": "1.0.0",
    "type": "npm",
    "files": "./public"
}
```

When you do so, running the `npm publish` command will publish all files under the `npm` path on the Eik server.

### Server URLs

Package URLs follow a specific format which are predictable so you can import any published packages into your application code via its URL.

#### Package URL format

```
http(s)://<server origin>/npm/<package name>/<package version>/<filename>.<extension>
```

If we were to run publish using the `eik.json` file definition above, resulting URLs would look like something like:

```
https://myeikserver.com/npm/lit/1.0.0/index.js
```

#### ESM Imports

```js
import lodash from 'https://myeikserver.com/npm/lit/1.0.0/index.js'
```

## Accessing installed NPM packages

### The Eik meta command

To view publish information, you can use the `eik meta` command.

```sh
eik meta lit
```

