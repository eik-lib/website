---
id: overview_eik_json
title: The eik.json File
sidebar_label: The eik.json File
---

Eik packaging is configured either by way of a JSON meta file called `eik.json` or by values included in a `package.json` file. Any project that publishes assets to an Eik server must provide this configuration in one (and only one) of these locations.

### Defining Eik configuration in an eik.json file

The most common way to configure an Eik setup is to create and populate an `eik.json` file in a project's root. Values placed in this configuration tell the Eik client where the Eik server is location, which files to package, name, version and so on.

**_Example_**

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

**_Example_**

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

It is also possible to have Eik use the `package.json` `name` and `version` fields by omitting them from the configuration.

**_Example_**

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "eik": {
    "server": "https://assets.myeikserver.com",
    "files": "./dist",
    "import-map": "https://assets.myeikserver.com/map/my-map/1.0.0"
  }
}
```

### Defining the package type

You can specify the type of package you are uploading to the Eik server with the `type` field.

Package (`package` or `npm`)

```json
{
  "name": "my-app",
  "type": "package",
  "server": "https://assets.myeikserver.com",
  "version": "1.0.0",
  "files": "./dist"
}
```

Import map (`map`)

```json
{
  "name": "my-map",
  "type": "map",
  "server": "https://assets.myeikserver.com",
  "version": "1.0.0",
  "files": "./import-map.json"
}
```

The default value is `package` and is read by the `eik publish` command when you are ready to publish your assets.

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
  "files": {}
}
```

## eik.json file fields

### name

- required

Defines the value that will be used on the Eik server to configure the namespace for the project. This should be unique to an organisation.

See [application packages](/docs/client_app_packages) for more information.

### type

- optional

Defines the package type that is used when uploading assets to the Eik server.

Possible values are `package` (default), `map` or `npm`.

### version

- required

Defines current Eik package version using [semver](https://semver.org/). This must be unique to a given package name within an organisation. Attempting to republish the same version a second time will fail.

```json
{
  "version": "1.0.0"
}
```

You can manually update this value or use the `eik version` command to automate the process.

See [application packages](/docs/client_app_packages) for more information.

### server

- required

Defines the location of the Eik server that the project will publish to.

See the [server docs](/docs/server) for how to setup and configure an Eik server.

### files

- required

Defines JavaScript and CSS file entrypoints to publish. This can be a string defining a folder or a single entrypoint or it can be an object that maps publish paths to local file system file locations.

#### Defining "files"

The following specifies that all files in the `dist` folder should be uploaded to the Eik server. Note that relative paths and absolute paths can be used as well.

```json
{
  "files": "./dist"
}
```

Nested folders are also supported:

```json
{
  "files": "./dist/assets"
}
```

You can use glob syntax to decide which files to include:

```json
{
  "files": "./dist/**/*.js"
}
```

Additionally, `files` can be an object instead of a string and mappings can be provided. This makes it possible to specify exact files to upload and even rename them in the process.
Absolute and relative paths as well as glob syntax are also supported when defining file mappings in this way.

```js
files: {
    // file `./path/to/esm.js` is uploaded and renamed to `/script.js`
    'script.js': './path/to/esm.js',

    // file `/absolute/path/to/esm.js` is uploaded and renamed to `/script.js`
    'script.js': '/absolute/path/to/esm.js',

    // everything in `./path/to/folder` is uploaded to `/folder`
    'folder': './path/to/folder',

    // everything in `./path/to/folder` is uploaded to `/folder` (but no folder recursion)
    'folder': './path/to/folder/*',

    // everything in `./path/to/folder` is uploaded to `/folder/scripts`
    'folder/scripts': 'path/to/folder/**/*',
}
```

Keys (eg. "scripts.js") define publish locations on the Eik server and values (eg. "./path/to/esm.js") define the local file entrypoint locations. This aligns somewhat loosely with [ESM package entrypoints](https://nodejs.org/dist/latest-v14.x/docs/api/esm.html#esm_package_entry_points) in Node.js

See [application packages](/docs/client_app_packages) for more information.

### import-map

- optional

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
    "https://assets.myeikserver.com/map/my-map-2/1.0.0"
  ]
}
```

See [import maps](/docs/client_import_maps) for more information.

### out

- optional
- default: `./.eik`

Can be used to configure the app's Eik build directory. By default this value is set to `.eik` which indicates that local Eik files should be placed in a folder called `.eik` in the current working directory.

```json
{
  "out": "./eik"
}
```
