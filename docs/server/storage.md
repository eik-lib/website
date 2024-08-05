---
title: Storage sinks
---

Eik uses a [sink interface](/docs/reference/at-eik-sink/) for storage. This design makes it possible to drop in different storage backends, for instance switching between local file storage for development and a cloud storage provider for production.

## Built in sinks

`@eik/service` ships with two built in sinks, intended for local development and testing:

- File system
- Memory

### File system

This is the default sink when you start the Eik server. The file system sink will write files to and from the local file system.

:::warning

By default all files are stored in the default OS temp folder. Do note that files stored in the default OS temp folder will, on most OSes, be deleted without warning by the OS at some point. To configure a different folder, use the `SINK_PATH` environment variable.

:::

You can also import `@eik/sink-file-system` and configure the sink that way.

```js
import Service from "@eik/service";
import Sink from "@eik/sink-file-system";

const sink = new Sink({
	sinkFsRootPath: path.join(process.cwd(), ".eik", "storage"),
});

const service = new Service({ sink });
```

### In memory

The in memory sink will write files to and from memory. Files written to this sink will disappear when the Eik server is restarted. This sink is handy for spinning up an Eik server to run tests.

To use it, set the `SINK_TYPE` environment variable to `mem`.

You can also import `@eik/sink-memory` and configure the sink that way.

```js
import Service from "@eik/service";
import Sink from "@eik/sink-memory";

const sink = new Sink();

const service = new Service({ sink });
```

## Custom sinks

A custom sink is normally pulled in as a dependent module and passed on to the `sink` property on the constructor of the `@eik/service` in a [production setup](/docs/server#production-setup).

A custom sink takes its own set of properties, such as authentication keys, so please see the documentation for each sink for what's required.

### Available custom sinks

These custom sinks are available:

- [Google Cloud Storage](https://github.com/eik-lib/sink-gcs)

Feel free to open a pull request to list a custom sink you've made, and use the [`eik-sink` topic](https://github.com/topics/eik-sink) if you publish on GitHub.

```js
import fastify from "fastify";
import Service from "@eik/service";
import Sink from "@eik/sink-gcs";

const sink = new Sink({
	credentials: {
		client_email: "an@email.address",
		private_key: "[ ...snip... ]",
		projectId: "myProject",
	},
});
const service = new Service({ sink });

const app = fastify({
	ignoreTrailingSlash: true,
});

app.register(service.api());
```

### Making a custom sink

A custom sink must extend the [Eik sink interface](/docs/reference/at-eik-sink/) and implement all the methods in the public API and its public properties.

## Internal storage structure

The Eik server stores files in the following structure inside the storage sink.

```sh
:root
└── :org
    ├── map
    │   └── :name
    │       ├── :version.import-map.json
    │       ├── :major.alias.json
    │       └── versions.json
    ├── pkg
    │   └── :name
    │       ├── :version
    │       │   ├── *
    │       ├── :version.package.json
    │       ├── :major.alias.json
    │       └── versions.json
    └── npm
        └── :name
            ├── :version
            │   ├── *
            ├── :version.package.json
            ├── :major.alias.json
            └── versions.json
```

Parameters:

- `:root` is the root folder for everything.
- `:org` is the name of an organisation.
- `:name` is the name of a package.
- `:version` is the full semver version of a package.
- `:major` is the major semver version of a full semver version of a package.

### Packages

Packages are stored under `/:root/:org/pkg/:name/:version/` and the structure of a package is
arbitrary and untouched during upload by the service.

The file structure of a package is stored in a package file at `/:root/:org/pkg/:name/:version.package.json`.

### npm

NPM packages are packages from the NPM registry that are then published to Eik as a "copy". Packages from
the NPM registry are published under this namespace to avoid name collision with other packages.

NPM packages are stored under `/:root/:org/npm/:name/:version/` and the structure of a package is
arbitrary and is not changed during upload by the service.

The file structure of an NPM package is stored in a package meta file at `/:root/:org/pkg/:name/:version.package.json`.

### Import maps

Import maps are stored under `/:root/:org/map/:name/:version.import-map.json`. The filename of
import maps is strict and conforms to the version number it's given with a `.json` extension.

The filename of import maps prior to uploading to the service can be anything. The service will
convert the file name according to the parameters given when uploading it.

### Aliases

Packages, NPM packages and import map versions can be aliased. An alias is a semver major version of a
full semver version and is a way to map a major version to a given full semver version of a
package or import map.

This alias mapping is stored alongside the version of a package or import map version:

- Package alias path: `/:root/:org/pkg/:name/:major.alias.json`
- NPM package alias path: `/:root/:org/npm/:name/:major.alias.json`
- Import map alias path: `/:root/:org/map/:name/:major.alias.json`
