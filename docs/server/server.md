---
title: Setting up an Eik server
---

The Eik server is a Node.js application distributed on npm as [`@eik/service`](https://www.npmjs.com/package/@eik/service). It aims to be runnable as a service out of the box, but still be flexible and customizable enough to suite a wide range of infrastructures needs.

The only requirement to run the Eik server is a current long-term support (LTS) version of [Node.js](https://nodejs.org/).

## Testing an Eik server from the command line

The fastest way to test a running instance of the Eik server is by using `npx`.

```sh
npx @eik/service
```

This will install the latest Eik server and start it at [http://localhost:4001](http://localhost:4001).

:::warning

By default all uploads are stored in a temporary directory that will be lost when your operating system cleans it up. To configure a persistent storage, set the `SINK_PATH` environment variable to a suitable location on disk.

:::

## Production setup

`@eik/service` also includes a [Fastify](https://www.fastify.dev/) plugin. This makes it flexible and easy to set up a production Eik service.

In this example we set up an Eik server using the local file system to store uploads. If you need other another storage solution [you can use or implement a different sink](/docs/server/sink).

Create a new project and install the required dependencies

```sh
mkdir eik-server
cd eik-server
npm init -y
npm install fastify @eik/service @eik/sink-file-system
```

Create `index.js` and add the following.

```js
import path from "node:path";
import fastify from "fastify";
import Service from "@eik/service";
import Sink from "@eik/sink-file-system";

const sink = new Sink({
	sinkFsRootPath: path.join(process.cwd(), ".eik", "storage"),
});

const service = new Service({ sink });

const app = fastify({
	ignoreTrailingSlash: true,
	modifyCoreObjects: false,
	trustProxy: true,
});

app.register(service.api());

const run = async () => {
	await service.health();
	await app.listen({
		port: service.config.get("http.port"),
		host: service.config.get("http.address"),
	});
};

run();
```

### Configuring for production

`@eik/service` reads YAML configuration from `config/` based on `NODE_ENV`.

Add `config/production.yaml` to change secrets and other commonly used settings.

```sh
mkdir config
touch config/development.yaml
touch config/production.yaml
```

See [the `@eik/service` config](https://github.com/eik-lib/service/blob/main/lib/config.js#L39) to see what values you can configure. Here's a typical `config/production.yaml`.

```yaml
organization:
  # replace with your organisation name
  name: store
  hostnames:
    - localhost
    # replace with your Eik server's domain
    - eik.store.com
jwt:
  # replace with the absolute path to a file holding your
  # jwt secret as plaintext (uses convict-format-secrets)
  secret: /var/run/secrets/auth_jwt_secret

basicAuth:
  # replace with the absolute path to a file holding your
  # basic auth key as plaintext (uses convict-format-secrets)
  key: /var/run/secrets/basic_auth_key

http:
  port: 8080
  address: "0.0.0.0"

log:
  level: info
```

### Run your Eik server

To run your Eik server with Node in production:

```sh
NODE_ENV=production node index.js
```

To run your Eik server with Node in development:

```
NODE_ENV=development node index.js
```
