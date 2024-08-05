---
title: "eik.json reference"
sidebar_label: "eik.json"
---

This document describes the Eik configuration schema.

Eik is typically configured with an `eik.json` file in the same directory as your `package.json`. However, you can also place the configuration in the `"eik"` field in `package.json`.

Any project that publishes assets to an Eik server must provide this configuration in one (and only one) of these locations.

## Using `eik.json`

The most common way to configure an Eik setup is to create and populate an `eik.json` file in a project's root, next to `package.json`.

```json
{
	"$schema": "https://raw.githubusercontent.com/eik-lib/common/main/lib/schemas/eikjson.schema.json",
	"name": "my-app",
	"version": "1.0.0",
	"server": "https://eik.store.com",
	"files": "./public",
	"import-map": ["https://eik.store.com/map/store/v1"]
}
```

## Using `package.json`

It is also possible to configure Eik via `package.json`.

```json
{
	"eik": {
		"$schema": "https://raw.githubusercontent.com/eik-lib/common/main/lib/schemas/eikjson.schema.json",
		"name": "my-app",
		"version": "1.0.0",
		"server": "https://eik.store.com",
		"files": "./public",
		"import-map": ["https://eik.store.com/map/store/v1"]
	}
}
```

It is also possible to have Eik use the `package.json` `name` and `version` fields by omitting them from the configuration.

```json
{
	"name": "my-app",
	"version": "1.0.0",
	"eik": {
		"$schema": "https://raw.githubusercontent.com/eik-lib/common/main/lib/schemas/eikjson.schema.json",
		"server": "https://eik.store.com",
		"files": "./public",
		"import-map": ["https://eik.store.com/map/store/v1"]
	}
}
```

## Creating `eik.json`

The [Eik CLI](/docs/reference/at-eik-cli/) includes a scaffolding tool that can be used to generate an `eik.json` file in the current directory.

```sh
eik init
```

## JSON schema

The schema is available on GitHub. Add this to your configuration to get code suggestions and inline documentation in some editors.

```json
{
	"$schema": "https://raw.githubusercontent.com/eik-lib/common/main/lib/schemas/eikjson.schema.json"
}
```

### name

- required

Defines the value that will be used on the Eik server to configure the name for the project. This should be unique to an organisation.

See [storage sink](/docs/server/storage#internal-storage-structure) for more information.

### version

- required

Defines the current Eik package version using [semantic versioning](https://semver.org/).

This must be unique to a given package name within an organisation. Attempting to republish the same version a second time will fail.

You can manually update this value or use the [`eik version` command](/docs/reference/at-eik-cli#version) to automate the process.

```json
{
	"version": "1.0.0"
}
```

### server

- required

Defines the URL of the Eik server that the project will publish to.

See the [server docs](/docs/server) for how to setup and configure an Eik server.

```json
{
	"server": "https://eik.store.com"
}
```

### files

- required

Defines files to publish.

This can be a string defining a folder or a single entrypoint, or it can be an object that maps publish paths to local file system file locations.

In this example, all files in the `./public` folder would be uploaded to the Eik server.

```json
{
	"files": "./public"
}
```

You can use glob syntax to decide which files to include.

```json
{
	"files": "./public/**/*.js"
}
```

You can configure `"files"` as an object to map different files or folders on disk to public paths.

Keys define publish locations on the Eik server and values define the local file entrypoint locations. This somewhat resembles [package entrypoints](https://nodejs.org/dist/latest/docs/api/packages.html#package-entry-points in Node.

```jsonc
{
	"files": {
		// `./path/to/esm.js` is uploaded and renamed to `/script.js`
		"script.js": "./path/to/esm.js",

		// `/absolute/path/to/esm.js` is uploaded and renamed to `/script.js`
		"script.js": "/absolute/path/to/esm.js",

		// everything in `./path/to/folder` is uploaded to `/folder`
		"folder": "./path/to/folder",

		// everything in `./path/to/folder` is uploaded to `/folder` (but no folder recursion)
		"folder": "./path/to/folder/*",

		// everything in `./path/to/folder` is uploaded to `/folder/scripts`
		"folder/scripts": "path/to/folder/**/*",
	},
}
```

### import-map

- optional

Configure [import maps](/docs/dependencies/import-maps) that will be [used during a build](/docs/introduction/workflow#build-time-import-mapping).
This can be specified as a single string or as an array of strings if you want to use more than one import map in the build.

```json
{
	"import-map": "https://eik.store.com/map/store/v1"
}
```

or

```json
{
	"import-map": [
		"https://eik.store.com/map/store/v1",
		"https://eik.store.com/map/store-2/v1"
	]
}
```

### out

- optional
- default: `./.eik`

Configure the Eik build directory. Eik will store resource integrity information in this directory, and may use it for other features in the future.

```json
{
	"out": "./eik"
}
```
