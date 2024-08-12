---
title: Introduction to Eik
---

Eik is an asset server designed for performant serving of
[ECMAScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) (ES modules) and CSS,
especially suited for multi-page or micro-frontend applications.

By hosting ES modules on a central server the browser can leverage both the browser and ES module cache to reduce time spent downloading, parsing and running JavaScript.

## The problem Eik solves

A common architecture for web applications is to have separate applications serving different pathnames. These typically have client-side JavaScript, and may often share the same dependencies.

![An illustrated user journey across three pages on store.com](/img/overview_page_to_page_flow.min.svg)

Take the illustrated user journey for `store.com` above.

- `store.com` is one application
- `store.com/shop` is another
- `store.com/checkout` is a third

A user will normally arrive at the front page, move to browsing the shop and then finish at the checkout.

Let's say the applications on `store.com` are using [Lit](https://lit.dev) for templating in the browser. Without Eik, all three applications ship with their own version of Lit. The browser needs to download, parse and execute Lit three times.

## Sharing ES modules with Eik

Sticking with our `store.com` example, if all three applications import Lit from Eik instead of shipping their own, the user's browser can cache the HTTP request between page views.

```js
import Lit from "https://eik.store.com/npm/lit/1.0.0/index.js";
```

:::tip

HTTP imports aren't the prettiest, but we'll be improving things with [import mapping](#import-mapping) soon! In your source code you'll still be using the bare imports you are familiar with when using bundlers.

:::

### Taking advantage of the ES module cache

Eik is designed to take advantage of the ES module cache as well. From Lin Clark's [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/):

> Any module that is in both of these graphs is going to share a module instance. This is because the loader caches module instances. For each module in a particular global scope, there will only be one module instance.
>
> This means less work for the engine. For example, it means that the module file will only be fetched once even if multiple modules depend on it.
>
> [...]
>
> The module map caches the module by canonical URL so that there is only one module record for each module. That ensures each module is only executed once.

The ES module cache is mostly relevant for micro-frontend architectures (where multiple apps can share the same global scope), but know that even if multiple modules import a shared dependency over HTTP the browser will only download and execute it once.

## Further improving performance with aliases

Now that our three apps on `store.com` all use Eik to import Lit we run into a different problem: version management.

![Example user journey where the three apps use slightly different versions of lit](/img/overview_page_to_page_diff_versions.min.svg)

Going back to the user journey for `store.com`, imagine that:

- `store.com` loads `lit@1.2.0`
- `store.com/shop` loads `lit@1.1.1`
- `store.com/checkout` loads `lit@1.1.2`

At this point we're back to square one. Each page visit means downloading, parsing and executing Lit.

We can tell from the [semantic version](https://semver.org/) numbers that they could all use `lit@1.2.0` and be fine. This is where [aliases](/docs/dependencies/aliases) come in.

Instead of importing specific versions, Eik encourages the use of aliases to share the same major semantic version between applications.

```js
import Lit from "https://eik.store.com/npm/lit/v1/index.js";
```

![The same user journey as before, but using Eik aliases to share the same version](/img/overview_page_to_page_same_versions.min.svg)

When all three applications point to the same alias the browser's HTTP cache ensures we don't download Lit more than once in the user journey.

:::tip

Another bonus with aliases is that new versions of a dependency can be published to Eik, and with an alias update it gets applied to all apps that depend on it – no redeploys needed ✨

:::

## Import mapping

You may be used to writing bare import strings like this.

```js
import Lit from "lit";
```

Imports like the above depend on Node's [module resolution algorithm](https://nodejs.org/docs/v20.16.0/api/esm.html#resolution-and-loading-algorithm). You then typically use a bundler to do that module resolution at build-time, and end up with one or more JavaScript files that include all the imported dependencies.

To use ES modules in the browser you can't rely on Node's resolution algoritm. Specification compliant ES module imports must be either relative or absolute.

A relative ESM import statement must start with either `/`, `./` or `../`:

```js
import * as mymod from "/my_module.js";
import * as mymod from "./my_module.js";
import * as mymod from "../my_module.js";
```

An absolute import must be a fully formed URL:

```js
import * as mylib from "https://eik-server.com/pkg/mylib/v3/main.js";
```

### Using bare imports in source code with maps

[Import maps](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap) is a browser feature that lets developers keep the ergonomics of bare imports, even when using ES modules in the browser. Import maps are a special `script` type where the bare import is a key, and the mapped import string (either relative or absolute) is the value.

```html
<script type="importmap">
	{
		"imports": {
			"lit-html": "https://eik.store.com/npm/lit/v1/index.js"
		}
	}
</script>
```

#### Sharing the import maps themselves on Eik

You can [publish import maps to Eik](/docs/dependencies/import-maps) in a similar way to dependencies and application code. Maps are versioned and immutable, and can be aliased in the same way other assets can. [Browser import mapping](/docs/guides/browser-importmap/) explains how you can include these shared import maps in your HTTP responses.

Import maps on Eik look similar to those in the browser, only without the `<script>` tag. The bare import as a key on the left and its absolute value on the right:

```json
{
	"imports": {
		"lit": "https://eik.store.com/npm/lit/v1/index.js"
	}
}
```

#### Build-time import mapping

Depending on your requirements for [browser support](https://caniuse.com/mdn-html_elements_script_type_importmap), using import maps in the browser may not be feasible. [There is a polyfill](https://github.com/guybedford/es-module-shims#readme) you can include to add support at the cost of some additional JavaScript.

Eik includes tools to do this import mapping at build-time. Check out the Guides section for several examples.

These build tools look up the configured import maps shared on the Eik server and replace bare imports with absolute imports pointing to the Eik server.

Given the following source code and import map, a correctly configured build tool will replace the bare import in source with the Eik URL in the built JavaScript bundle.

```js
// The source
import Lit from "lit";
```

```json
{
	"imports": {
		"lit": "https://eik.store.com/npm/lit/v1/index.js"
	}
}
```

```js
// The result
import * as lit from "https://eik.store.com/npm/lit/v1/index.js";
```

## Next steps

Now that you've learned about how Eik works to improve performance in the browser it's time to learn how to work with Eik as an application developer.
