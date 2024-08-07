---
title: Import maps
---

Publishing shared dependencies and aliasing them helps nothing if application code doesn't use them. Import maps make it easier for developers to discover and use dependencies you publish to your Eik server.

A refresher from the [introduction](/docs/introduction#import-mapping):

> You can publish import maps to Eik in a similar way to dependencies and application code. Maps are versioned and immutable, and can be aliased in the same way other assets can.

Like how the `npm` package type is designed for shared dependencies, `map` is designed to hold your import maps.

## Create an import map

In the [previous chapter](/docs/dependencies/aliases) you made an alias for `lodash` so applications can share the same major version and get automatic updates when the Eik alias is updated.

```
https://eik.store.com/npm/lodash/v4/index.js
```

Let's put that alias URL in an import map.

Eik import maps use the same syntax as [import maps in the browser](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap), though without the `<script>` tag.

```json
{
	"imports": {
		"lodash": "https://eik.store.com/npm/lodash/v4/index.js"
	}
}
```

Save that JSON to a file, for example `map.json`.

### Publish the import map to Eik

Open a terminal window, log in, and run the `eik map` command.

```sh
eik login --key YOUR_EIK_KEY --server https://eik.store.com
eik map store 1.0.0 ./map.json --server https://eik.store.com
```

You should now see the published import map at `https://eik.store.com/map/store/1.0.0/`.

### Create an alias for the import map

We encourage using aliases for import maps, similar to dependencies. That way an import map can be updated on Eik and new builds that use the import map get the updated map without changing their configuration.

```sh
eik login --key YOUR_EIK_KEY --server https://eik.store.com
eik map-alias store 1.0.0 1 --server https://eik.store.com
```

After running the `map-alias` command you should see the import map at `https://eik.store.com/map/store/v1/`.

## Update your import map

Say you add a new dependency and want to include it in the import map. The workflow is similar to when you first created the import map.

Update `map.json` to include the new mapping.

```json
{
	"imports": {
		"date-fns": "https://eik.store.com/npm/date-fns/v3/index.js",
		"lodash": "https://eik.store.com/npm/lodash/v4/index.js"
	}
}
```

Publish the map under a new version number.

```sh
eik login --key YOUR_EIK_KEY --server https://eik.store.com
eik map store 1.1.0 ./map.json --server https://eik.store.com
```

### Update an import map alias

With a new version of the map it's time to update the alias. The command is the same as before, only with an updated version number.

```sh
eik login --key YOUR_EIK_KEY --server https://eik.store.com
eik map-alias store 1.1.0 1 --server https://eik.store.com
```

## Use your new import map

Applications can now update their `eik.json` config to use the new import map. As long as their build tool is configured with an Eik plugin, that plugin will handle fetching the import map from the server and do the proper import mapping at build-time. Check out the Guides section for several examples.

```json
{
	"name": "my-app",
	"version": "1.0.0",
	"server": "https://eik.store.com",
	"files": "./public",
	"import-map": ["https://eik.store.com/map/store/v1"]
}
```

## How many import maps should you make?

Should you have one import for all your shared dependencies, or should you have several? That's up to you.

Import maps are versioned and can be aliased the same as any other asset on Eik. If you need to update a major version of a dependency you can create a new major version of the import map. However, updating a major version of a map means your users have to update their configuration.

If you have a dependency that's only used by a subset of your applications, consider having a separate import map for that dependency and its ecosystem of related modules. That way any major changes in that import map don't needlessly affect applications that don't use that dependency.

Taken to its extreme, you could make an import map for each dependency. However, at that point developers could just as well configure their builds to use the package aliases directly, skipping the import maps entirely.

## Next steps

You've now covered all the different assets and aliases on Eik:

- Application packages
- Shared npm packages
- Import maps

Now it's time to point application developers to the [Getting started guide](/docs/introduction/workflow) and let them know they should use your new import map.
