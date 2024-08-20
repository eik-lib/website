---
title: "Publishing to the images namespace"
sidebar_label: image packages
---

Eik's provides an image namespace for uploading images. 
The purpose of this namespace is three-fold. 

1. By creating a separate namespace, files that change infrequently (images and other media) can be uploaded and versioned separately from files that change often (JavaScript and CSS)
2. An image manipulation service such as Fastly's [image optimization](https://www.fastly.com/products/image-optimization) can be placed in front of this namespace.
3. Your Eik server can be configured to allow larger package sizes on the image namespace and smaller package sizes on other namespaces.

In this document you'll learn how to:

- publish images to your Eik server
- how to update existing images
- create an alias that can be updated as you publish new patch or minor versions of your images

## Preparing images for Eik

The `image` namespace on Eik works the same way as for application code. You will need:

- some images to upload
- an `eik.json`

### Configure Eik

The first step is to create an `eik.json` file.

```sh
eik init
```

Open the newly created `eik.json` and fill out the required fields.

```json
{
	"name": "my-images",
	"type": "image",
	"version": "1.0.0",
	"server": "https://eik.store.com",
	"files": "./path/to/images/folder"
}
```

:::tip

If your organisation doesn't have a running Eik server yet, hop on over to [the server documentation](/docs/server).

:::

The `files` key should be set to a directory containing image files to publish. Eik does not discriminate file types so if you wish to upload videos and other types of media, this will also work.

### Publish the images

Let's update the `"files"` field in `eik.json` to include an images folder in our imaginary project.

```json
{
	"name": "my-images",
	"type": "image",
	"version": "1.0.0",
	"server": "https://eik.store.com",
	"files": "./images/"
}
```

Now you can log in to the Eik server and publish, same as when publishing an application.

```sh
eik login --key YOUR_EIK_KEY
eik publish
```

At this point your images should be available on the path `https://eik.store.com/img/my-images/1.0.0`.

:::tip

You should keep `package.json`, `eik.json` and the build script in version control so you don't have to recreate this setup when there are updates.

:::

## Get information about a published package

To view publish information, you can use the `eik meta` command.

```sh
eik meta my-images
```

## Updating a published package

New versions of the image package need to be published to the Eik server, either manually or with automation like Renovate or Dependabot. Whether you choose to automate or have a manual process, these are the steps to update a module.

1. Add, remove or update images in your images directory
2. Update the version number in `eik.json`
3. Run the build script
4. Publish to the Eik server
