---
title: "@eik/service reference"
sidebar_label: "@eik/service"
---

[`@eik/service`](https://github.com/eik-lib/service#readme) is the [Eik server itself](/docs/server/). This document describes its JavaScript API.

## Constructor

Create a new Eik service instance.

```js
import Service from "@eik/service";
const service = new Service(options);
```

### options (optional)

| option               | default                  | type     | details                                                                                                                                 |
| -------------------- | ------------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| sink                 | `null`                   | `object` | The [storage sink] you would like to use.                                                                                               |
| logger               | `null`                   | `object` | An instance of the [pino logger](https://getpino.io/).                                                                                  |
| customSink           | `null`                   | `object` | Deprecated. Use `sink`.                                                                                                                 |
| aliasCacheControl    | `"public, max-age=1200"` | `string` | Cache-Control header to respond with when getting an [alias](/docs/dependencies/aliases).                                               |
| notFoundCacheControl | `"public, max-age=5"`    | `string` | Cache-Control header to respond with when returning 404 Not Found.                                                                      |
| pkgMaxFileSize       | `10_000_000`             | `number` | The limit in bytes before [PUT /pkg/:name/:version](/docs/server/http-api#upload-a-package) starts returning 413 Content Too Large.     |
| mapMaxFileSize       | `1_000_000`              | `number` | The limit in bytes before [PUT /map/:name/:version](/docs/server/http-api#upload-an-import-map) starts returning 413 Content Too Large. |

## API

An Eik service instance has the following API:

### .api()

The Eik service as a [Fastify plugin](https://www.fastify.io/docs/latest/Plugins/). The returned function must be passed on to the Fastify `.register()` method:

```js
import fastify from "fastify";
import Service from "@eik/service";

// Set up the Eik service as a plugin
const service = new Service({ sink });

// Set up Fastify
const app = fastify({
	ignoreTrailingSlash: true,
});

// Register the Eik service in Fastify
app.register(service.api());
```

This will make the [Eik HTTP API](/docs/server/http-api/) available.

Due to how the HTTP API deals with wildcards on pathnames to resolve files, it is recommended that the `ignoreTrailingSlash` option on the Fastify constructor that the plugin is registered to is set to `true`. If this is not done, file resolving might not work as expected.

### .health()

Runs a health check on the Eik service. Throws if any of the health checks fails.

The health check mainly determines if the service is able to run all methods on the configured storage sink.

We recommend executing the health check before the service begins accepting HTTP traffic.

```js
const run = async () => {
	await service.health();
	await app.listen({
		port: service.config.get("http.port"),
		host: service.config.get("http.address"),
	});
};

run();
```

## Properties

An Eik service instance has the following properties:

### .metrics

Property that exposes a metric stream. Please see the [metrics section](/docs/server/metrics/) for usage information.

### .config

Property that exposes configuration via [convict](https://github.com/mozilla/node-convict).

```js
import Service from "@eik/service";

const service = new Service();
service.logger.info(`Server is running in ${service.config.get("env")} mode`);
```

### .logger

Property that exposes the [pino logger](https://getpino.io/) instance.

```js
import Service from "@eik/service";

const service = new Service();
service.logger.info(`Server is running in ${service.config.get("env")} mode`);
```

### .sink

Property that exposes the currently used [storage sink].

[storage sink]: /docs/server/storage/
