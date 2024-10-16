---
title: "Publishing to the image namespace"
sidebar_label: image packages
---

The purpose of the image namespace is three-fold:

1. Files that change infrequently (images and other media) can be uploaded and versioned separately from files that change often (JavaScript and CSS).
2. A service such as Fastly's [image optimization](https://www.fastly.com/products/image-optimization) can be placed in front of this namespace.
3. Your Eik server can allow larger package sizes on the image namespace.

In this document you'll learn how to:

- publish images to your Eik server
- how to update existing images

## Preparing images for Eik

The `image` namespace on Eik works the same way as for application code. You will need:

- some images to upload
- an Eik configuration for images separate from application code

## Configure the image package

We'll assume you [already have an `eik.json` for application code](/docs/introduction/workflow).

The first step then is to create an `eik-image.json` file. Open `eik-image.json` and fill out the required fields.

```json
{
	"name": "my-images",
	"type": "image",
	"version": "1.0.0",
	"server": "https://eik.store.com",
	"files": "./public/images"
}
```

The `files` key should be set to a directory containing image files to publish.

Eik does not discriminate file types so if you wish to upload videos and other types of media, this will also work.

### Change the existing `eik.json`

Change the files field of your original `eik.json` so it only includes the application code, not the images.

```json
{
	"name": "my-project",
	"type": "package",
	"version": "1.0.0",
	"server": "https://eik.store.com",
	"files": "./public/package"
}
```

## Update Eik client

In your server you are likely already using the [Eik node client](/docs/reference/at-eik-node-client). You have to adjust it to point at the new location for your application code, as well as create a new instance to handle your images.

Your existing usage may look something like this.

```js
const eik = new Eik({ base: "/public", development });
await eik.load();
```

Change the path to reflect the changes we made earlier.

```js
const eik = new Eik({ base: "/public/package", development });
await eik.load();
```

Create a new instance to handle your images.

```js
import { join } from "node:path";

const eikImage = new Eik({
	base: "/public/image",
	development,
	path: join(process.cwd(), "./eik-image.json"),
});

await eikImage.load();
```

You can now reference your static assets in your server using `eikImage`.

```js
const markup = `<img src="${eikImage.file("/image1.png").value}" alt="..." />`;
```

This will result in the `src` path pointing to your local development setup when you are running locally in development mode, and pointing to the Eik server when running in dev or prod.

## Publish the images

Say you've made an `eik-image.json` like above and you want to publish the images from its `files` configuration.

To do so, log in to the Eik server and publish. This works the same as when publishing an application, except you should pass the `--config` option.

You can also [automate the publish process](/docs/guides/github-actions-images/).

```sh
eik login --key <token>
eik publish --config eik-image.json
```

At this point your images should be available on the path `https://eik.store.com/img/my-images/1.0.0`.

## Get information about a published package

To view publish information, you can use the `eik meta` command.

```sh
eik meta my-images
```

## Updating a published package

Whether you choose to [automate](/docs/guides/github-actions-images/) or have a manual process, these are the steps to update a module.

1. Add, remove or update images in your images directory
2. Update the version number in `eik-image.json`, manually or with `eik version --config eik-image.json`
3. Publish with `eik publish --config eik-image.json`
