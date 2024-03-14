---
id: client_app_packages
title: Application Packages
sidebar_label: Application Packages
---

Publishing and serving your application's client side assets is the main task Eik was designed for. Given local paths to client side bundle files you produce, Eik will package up the files and upload them to an Eik server where they will be served for use in your production applications.

## Producing packages

Use the `publish` command to package and upload local JavaScript and CSS bundle files to an Eik server from where they will be served.

### eik.json definitions

In your app's Eik config you use the `files` key to define a local path or paths to be included when publishing.

#### eik.json file entrypoints

```json
{
    "files": "./public"
}
```

#### package.json file entrypoints

```json
{
    "eik": {
        "files": "./public"
    }
}
```

### The publish command

With entrypoints defined in the Eik config, running the `eik publish` command will assemble files (specified by entrypoints) into an archive and upload the archive to the Eik server defined by the `server` field.

```sh
eik publish
```

Once uploaded, the archive will be unpacked and the files served at the appropriate paths.

The following example shows how entrypoint definitions correspond to final file locations:

#### Example.

Given the following local files:

* `./public/index.js`
* `./public/index.js.map`
* `./public/ie11.js`
* `./public/ie11.js.map`
* `./public/index.css`
* `./public/index.css.map`

And the following eik.json definition:

```json
{
    "server": "http://assets.myserver.com",
    "name": "my-pack",
    "version": "1.0.0",
    "files": "./public"
}
```

Or the following package.json definition:

```json
{
    "eik": {
        "name": "my-pack",
        "version": "1.0.0",
        "server": "http://assets.myserver.com",
        "files": "./public"
    }
}
```

When running the following command:

```sh
eik publish
```

Then the published URLs will be:

* `http://assets.myserver.com/pkg/my-pack/1.0.0/index.js`
* `http://assets.myserver.com/pkg/my-pack/1.0.0/index.js.map`
* `http://assets.myserver.com/pkg/my-pack/1.0.0/ie11.js`
* `http://assets.myserver.com/pkg/my-pack/1.0.0/ie11.js.map`
* `http://assets.myserver.com/pkg/my-pack/1.0.0/index.css`
* `http://assets.myserver.com/pkg/my-pack/1.0.0/index.css.map`
