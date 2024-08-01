---
title: Package types
sidebar_label: Package types
---

Eik differentiates between three types of packages:

- `npm` are shared dependencies
- `maps` are import maps
- `pkg` are applications

On the server these different types live under separate namespaces to avoid naming conflicts.

### `npm`

The `npm` namespace is designed for modules from the [npm repository](https://www.npmjs.com/).

This is somewhat similar to what [unpkg](https://unpkg.com/) and [pika](https://www.pika.dev/) do, however Eik does not act as a proxy. Instead, you must manually publish modules from npm to Eik, as well as do any transpiling to ESM before publishing.

NPM Packages live under the [/npm/](server_rest_api.md#npm-packages) namespace on an Eik server.

### `maps`

Import Maps are handled as single JSON files in Eik and not treated as a package. It's only possible to upload a single file and not a group of files like it is when uploading packages.

Import Maps live under the [/map/](server_rest_api.md#import-maps) namespace on a Eik server.

### `pkg`

Eik packages are normally produced by websites and web applications. Such a package typically consists of bundled application code which, most of the time, does not really make much sense to publish as a module to a public repository such as NPM.

Packages live under the [/pkg/](server_rest_api.md#packages) namespace on an Eik server.

## Naming and versioning

A package intended to be published to an Eik server should follow the [NPM module naming convention](https://github.com/npm/validate-npm-package-name):

- package name length should be greater than zero
- all characters in a package name must be lowercase i.e., no uppercase or mixed case names are allowed
- package name _can_ consist of hyphens
- package name _must not_ contain non-url-safe characters (since name ends up being part of a URL)
- package name _should not_ start with `.` or `_`
- package name _should not_ contain leading or trailing spaces
- package name _should not_ contain any of the following characters: `~)('!*`
- package name _cannot_ be the same as a node.js/io.js core module nor a reserved/blacklisted name. For example, the following names are invalid:
  - http
  - stream
  - node_modules
  - favicon.ico
- package name length cannot exceed 214

All packages published to an Eik server is immutable and versioned with [Semantic Versioning](https://semver.org/). This makes it possible to differentiate between what are considered smaller changes to a package which should not break behaviour in a dependency from changes which can be breaking.

Since packages are immutable, the Eik server will set an infinite HTTP cache control header on all files belonging to a package to make use of browser caching.

## Aliasing

Aliasing can be applied to all packages and is a way of having a static URL reference, which can change, to a version of a package. Aliases are mutable and can be set to point to different versions of a package. The alias URL will do a redirect to the full version that it is set to point to.

Lets say we publish `lit-html` version `1.1.1` as an NPM package to an Eik server. It will then live on the following URL:

```sh
https://eik-server.com/npm/lit-html/1.1.1/
```

If we then create an alias for this version it will live on the following URL:

```sh
https://eik-server.com/npm/lit-html/v1/
```

Any request to any file under this alias will be redirected to the same path under the package version it refers too.

A request to the following file under the alias:

```sh
https://eik-server.com/npm/lit-html/v1/lit-html.js
```

will redirect to:

```sh
https://eik-server.com/npm/lit-html/1.1.1/lit-html.js
```

Aliasing is not automatic in Eik. Aliases must be created or updated manually when a version of a package is published to an Eik server.

### Aliasing and versioning

Aliasing is tied to the semantic version of each package where the alias is the major version as a single digit pointing to a given full version of the same major version. That means that all 1.x versions of a package can have a `v1` alias and all 2.x versions of the same package can have a `v2` alias at the same time.

This is a feature to make sure there is a way to publish breaking changes in a package without breaking its dependencies. In semantic versioning `patch` and `minor` versions are supposed to not contain breaking changes while a `major` version can contain breaking changes so in a situation where a package introduces a breaking change it should, according to semantic versioning, be published as a new major version.

This breaks a bit with what Eik is trying to solve if we look at the challenge we outlined in our [introduction](overview.md#introduction) but the handling of breaking changes is probably the one place where it's acceptable not to align all dependencies of a package to the same version of it.
