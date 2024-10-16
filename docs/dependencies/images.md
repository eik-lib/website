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
	"files": "./images/"
}
```

The `files` key should be set to a directory containing image files to publish.

Eik does not discriminate file types so if you wish to upload videos and other types of media, this will also work.

## Publish the images

Say you've made an `eik-image.json` like above and you want to publish the images from its `files` configuration.

To do so, log in to the Eik server and publish. This works the same as when publishing an application, except you should pass the `--config` option.

```sh
eik login --key <token>
eik publish --config eik-image.json
```

At this point your images should be available on the path `https://eik.store.com/img/my-images/1.0.0`.

You can also [automate the publish process](/docs/guides/github-actions-images/).

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
