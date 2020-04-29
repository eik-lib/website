---
id: server_service
title: Eik server - Service
sidebar_label: Service
---

The EIK server has the following REST API:

## Installation

The Eik service can be installed and run in multiple ways.

### With npx

```sh
npx eik-lib/service
```

### With npm

```sh
npm install -g @eik/service
```

### As a dependency

```sh
npm install @eik/service
```

```js
const Eik = require("@eik/service");

const server = new Eik();
server.start();
```

## Configuration


### http

#### http2



#### address

#### port


### jwt

#### secret

```yaml
jwt:
  secret: 'something_very_secret'
```

```yaml
jwt:
  secret: '/var/run/secrets/some_secret'
```

### basicAuth

#### type

#### key

```yaml
basicAuth:
  key: 'something_hard_to_guess'
```

```yaml
basicAuth:
  key: '/var/run/secrets/some_key'
```

### organization

#### name

#### hostnames

```yaml
organization:
  name: awesome_site
  hostnames:
    - cdn.awesome_site.com
```