---
id: client_app_packages
title: Application Packages
sidebar_label: Application Packages
---

Publishing and serving your application's client side assets is the main task Eik was designed for. Given local paths to client side bundle files you produce, Eik will package up the files and upload them to an Eik server where they will be served for use in your production applications.

## Producing packages

Use the `publish` command to package and upload local JavaScript and CSS bundle files to an Eik server from where they will be served.

### eik.json definitions

In your app's Eik config you use the `files` key to define local file paths to be included when packaging.

#### eik.json file entrypoints

```json
{
  "files": "./scripts"
}
```

#### package.json file entrypoints

```json
{
  "eik": {
    "files": "./scripts"
  }
}
```

### The publish command

With entrypoints defined in the Eik config, running the `eik publish` command will assemble files (specified by entrypoints) into an archive and upload the archive to the Eik server defined by the `server` field. The type of package uploaded depends on the `type` field specified in the config. Possible values are `package`, `npm` and `map` with `package` being the default.

```sh
eik publish
```

Once uploaded, the archive will be unpacked and the files served at the appropriate paths.

The following examples show how entrypoint definitions correspond to final file locations:

#### Example.

```js
// everything in the `<cwd>/folder` is uploaded to /
files: 'folder'

// everything in the `<cwd>/folder` is uploaded to /
files: './folder'

// everything in the `<cwd>/folder` is uploaded to /
files: './folder/'

// everything in the `<cwd>/folder/nested` is uploaded to /
files: './folder/nested'

// everything in the `<cwd>/folder` is uploaded to / (no directory recursion)
files: './folder/*'

// everything in the `<cwd>` is uploaded to / (dont do this!)
files: './**/*'

// everything in the `<cwd>/folder` is uploaded to /
files: './folder/**/*'

// everything in the `/path/to/folder` is uploaded to /
files: '/path/to/folder/**/*'

// everything in the `/path/to/folder` is uploaded to /
files: '/path/to/folder'

files: {
    // file `<cwd>/path/to/esm.js` is uploaded and renamed to `/script.js`
    'script.js': './path/to/esm.js',

    // file `/absolute/path/to/esm.js` is uploaded and renamed to `/script.js`
    'script.js': '/absolute/path/to/esm.js',

    // everything inside `/absolute/path/to/folder` is uploaded to `/folder`
    'folder': '/absolute/path/to/folder',

    // everything in `<cwd>/path/to/folder` is uploaded to `/folder`
    'folder': './path/to/folder',

    // everything in `<cwd>/path/to/folder` is uploaded to `/folder`
    'folder': 'path/to/folder',

    // everything in `/absolute/path/to/folder` is uploaded to `/folder`
    'folder': '/absolute/path/to/folder/**/*',

    // everything in `<cwd>/path/to/folder` is uploaded to `/folder` (but no folder recursion)
    'folder': './path/to/folder/*',

    // everything in `<cwd>/path/to/folder` is uploaded to `/folder`
    'folder': 'path/to/folder/**/*',

    // everything in `<cwd>/path/to/folder` is uploaded to `/folder/scripts`
    'folder/scripts': 'path/to/folder/**/*',
}
```

_URLs after uploading will be something like..._

- `http://assets.myserver.com/pkg/my-pack/1.0.0/index.js`
- `http://assets.myserver.com/pkg/my-pack/1.0.0/index.js.map`
- `http://assets.myserver.com/pkg/my-pack/1.0.0/index.css`
- `http://assets.myserver.com/pkg/my-pack/1.0.0/index.css.map`
