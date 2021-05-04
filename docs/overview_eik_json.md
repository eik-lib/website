---
id: overview_eik_json
title: The eik.json File
sidebar_label: The eik.json File
---

Eik packaging is configured either by way of a JSON meta file called `eik.json` or by values included in `package.json`. Any project that publishes assets to an Eik server must provide this configuration in one (and only one) of these ways.

### Defining Eik configuration in an eik.json file

The most common way to configure an Eik setup is to create and populate an `eik.json` file in the project's root. Values placed in this configuration tell the Eik client where the Eik server is located, which files to package, its name, version and so on.

__*Example*__

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "server": "https://assets.myeikserver.com",
  "files": "./dist",
  "import-map": "https://assets.myeikserver.com/map/my-map/1.0.0"
}
```

### Defining Eik configuration in a package.json file

Instead of specifying Eik configuration in an `eik.json` file, it is also possible to define the same values in `package.json`. When doing so, the exact same configuration values can be set and everything must be placed under an `eik` key.

__*Example*__

```json
{
  "eik": {
    "name": "my-app",
    "version": "1.0.0",
    "server": "https://assets.myeikserver.com",
    "files": "./dist",
    "import-map": "https://assets.myeikserver.com/map/my-map/1.0.0"
  }
}
```

It is also possible to have Eik use the `package.json` `name` and `version` fields by omitting them from the Eik configuration.

__*Example*__

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "eik": {
    "server": "https://assets.myeikserver.com",
    "files": "./dist"
  }
}
```

## Generating an eik.json file

The Eik [client](client.md) provides a scaffolding tool that can be used to generate an `eik.json` file in the current directory.

```sh
eik init
```

Once generated, it's necessary to add information about the Eik server URL for the project, asset entrypoints and so on.

### Example scaffolded eik.json file

```json
{
  "name": "",
  "version": "1.0.0",
  "server": "",
  "files": {},
}
```

## eik.json file fields

### name  

* required

Defines the value that will be used on the Eik server to configure the namespace for the project. This should be unique to an organisation.

See [application packages](/docs/client_app_packages) for more information.

### version

* required

Defines current Eik package version using [semver](https://semver.org/). This must be unique to a given package name within an organisation. Attempting to republish the same version a second time will fail.

```json
{
  "version": "1.0.0"
}
```

You can manually update this value or use the `eik version` command to automate the process.

See [application packages](/docs/client_app_packages) for more information.

### server

* required

Defines the location of the Eik server that the project will publish to.

See the [server docs](/docs/server) for how to setup and configure an Eik server.

### files

* required

Defines JavaScript and CSS file entrypoints to publish. This can be a string defining a single entrypoint or folder, or it can be an object that maps publish paths to local file system file locations.

See [application packages](/docs/client_app_packages) for more information.

#### Entrypoint path

The simplest way to specify files is with a path to a folder to upload. Everything within the folder will be uploaded as is and filenames will be preserved.

If the following folder contains the files, `esm.js`, and `styles.css` then:

```json
{
  "files": "path/to/files"
}
```

will result in 3 files at the following locations:

* `/pkg/<name>/<version>/eik.json`
* `/pkg/<name>/<version>/esm.js`
* `/pkg/<name>/<version>/styles.css`

#### Entrypoint file mappings

Instead of a string, an object can be provided to define any number of JavaScript files to be included when publishing. Object keys define publish locations on the Eik server and object values define the local file entrypoint locations and may include globbing. This aligns somewhat loosely with [ESM package entrypoints](https://nodejs.org/dist/latest-v14.x/docs/api/esm.html#esm_package_entry_points) in Node.js

The following defines several JavaScript and CSS entrypoints and their locations on the server where they will be published to. 

```json
{
  "files": {
    "./esm.js": "path/to/esm.js",
    "./esm.js.map": "path/to/esm.js.map",
    "./styles.css": "path/to/styles.css",
    "./styles.css.map": "path/to/styles.css.map",
  }
}
```

This will result in files at the following locations:

* `/pkg/<name>/<version>/eik.json`
* `/pkg/<name>/<version>/esm.js`
* `/pkg/<name>/<version>/esm.js.map`
* `/pkg/<name>/<version>/styles.css`
* `/pkg/<name>/<version>/styles.css.map`

See [application packages](/docs/client_app_packages) for more information.

### import-map

* optional

Can be used to include [import map](https://github.com/WICG/import-maps#the-basic-idea) files from URLs that will be used during a build to map bare import specifiers to given URLs. This can be specified as a single string or as an array of strings if you wish to use more than 1 import map in the build.

```json
{
  "import-map": "https://assets.myeikserver.com/map/my-map/1.0.0"
}
```

or

```json
{
  "import-map": [
    "https://assets.myeikserver.com/map/my-map/1.0.0",
    "https://assets.myeikserver.com/map/my-map-2/1.0.0",
  ]
}
```

See [import maps](/docs/client_import_maps) for more information.

### out

* optional
* default: `./.eik`

Can be used to configure the app's Eik build directory. By default this value is set to `.eik` which indicates that local Eik files should be placed in a folder called `.eik` in the current working directory.

```json
{
  "out": "./eik"
}
```
