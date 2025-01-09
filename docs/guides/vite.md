---
title: Using Eik with Vite
---

This guide describes how to configure [Vite](https://vite.dev/) to use [build-time import mapping](/docs/introduction/workflow#build-time-import-mapping). The guide assumes you have an `eik.json` containing at least one [`"import-map"`](/docs/reference/eik-json#import-map).

## Getting started

Install [`@eik/vite-plugin`](https://github.com/eik-lib/vite-plugin#readme), and `vite` if you haven't already.

```sh
npm install --save-dev vite @eik/vite-plugin
```

## Configure your build

Create or edit `vite.config.ts` to add the Eik plugin.

```ts
import eik from "@eik/vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [eik()],
});
```

## Run your build

Add these scripts to `package.json` if you haven't already.

```json
{
	"scripts": {
		"dev": "vite",
		"build": "vite build"
	}
}
```

Now you can run a production build using the Eik plugin by running this command.

```sh
npm run build
```

## Advanced usage

See the [plugin documentation](https://github.com/eik-lib/vite-plugin?tab=readme-ov-file#options) for advanced options on loading import maps.
