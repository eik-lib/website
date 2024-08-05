---
title: Metrics
---

`@eik/service` exposes a [metrics stream](https://metrics-js.github.io/) that can give insight on how the server is performing.

## Usage

You access the metrics stream on the `.metric` property of the Eik service. In this example we'll set up an endpoint so [Prometheus](https://prometheus.io/) can periodically fetch the metrics.

:::tip

The metrics stream isn't tied specifically to Prometheus.
See [the MetricsJS documentation](https://metrics-js.github.io/introduction/getting-started/#create-a-consumer) to learn how to consume these metrics if you don't use Prometheus.

:::

```js
import MetricsConsumer from "@metrics/prometheus-consumer";
import prometheus from "prom-client";
import Service from "@eik/service";
import fastify from "fastify";

const service = new Service();

const metricsConsumer = new MetricsConsumer({
	client: prometheus,
});

service.metrics.pipe(metricsConsumer);

const app = fastify();
app.register(service.api());

app.get("/_/metrics", (request, reply) => {
	reply.type(metricsConsumer.registry.contentType);
	reply.send(metricsConsumer.registry.metrics());
});

const run = async () => {
	await service.health();
	await app.listen({
		port: service.config.get("http.port"),
		host: service.config.get("http.address"),
	});
};

run();
```

## Available metrics

Each metric provided by the server has a unique `name` and a `type` defining what type (counter, histogram, etc) of
metric it is.

The server exposes these metrics.

| Name                          | Type      | Description                                                                             |
| ----------------------------- | --------- | --------------------------------------------------------------------------------------- |
| eik_core_auth_post_handler    | histogram | Time taken in a [login](http-api.md#login) method                                       |
| eik_core_pkg_get_handler      | histogram | Time taken in a [public package](http-api.md#public-package-url) method                 |
| eik_core_pkg_log_handler      | histogram | Time taken in a [package version overview](http-api.md#package-version-overview) method |
| eik_core_pkg_put_handler      | histogram | Time taken in a [upload package](http-api.md#upload-a-package) method                   |
| eik_core_versions_get_handler | histogram | Time taken in a [latest package versions](http-api.md#latest-package-versions) method   |
| eik_core_alias_get_handler    | histogram | Time taken in a [public alias](http-api.md#public-alias-url) method                     |
| eik_core_alias_put_handler    | histogram | Time taken in a [create alias](http-api.md#create-alias) method                         |
| eik_core_alias_post_handler   | histogram | Time taken in a [update alias](http-api.md#update-alias) method                         |
| eik_core_alias_del_handler    | histogram | Time taken in a [delete alias](http-api.md#delete-alias) method                         |
| eik_core_map_get_handler      | histogram | Time taken in a [public import maps](http-api.md#public-import-maps-url) method         |
| eik_core_map_put_handler      | histogram | Time taken in a [upload import maps](http-api.md#upload-an-import-map) method           |
