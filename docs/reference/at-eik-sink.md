---
title: "@eik/sink reference"
sidebar_label: "@eik/sink"
---

The [`@eik/sink` module](https://github.com/eik-lib/sink) specifies the public API for all [Eik storage backends](/docs/server/storage/). The [existing sinks](https://github.com/topics/eik-sink) are good examples to look at when implementing a custom sink.

## Constructor

A sink must be a `class` which extends the Eik sink interface.

```js
import Sink from "@eik/sink";

class SinkCustom extends Sink {
	constructor() {
		super();
	}
	write() {}
	read() {}
	delete() {}
	exist() {}
	get metrics() {}
}
```

## API

A sink must implement the following API:

### write(filePath, contentType)

| argument    | default | type     | required | details                                                                                             |
| ----------- | ------- | -------- | -------- | --------------------------------------------------------------------------------------------------- |
| filePath    | `null`  | `string` | `true`   | Pathname of the file relative to `root` in the [file structure](/docs/server_file_structure) in Eik |
| contentType | `null`  | `string` | `true`   | Content type of the file                                                                            |

This method is called when a file is to be written to storage. The method must return a `Promise` and resolve with a `WritableStream` when the storage is ready to be written too. The server will pipe the byte stream of the file to this stream. Upon any errors, the promise should reject with an `Error` object

```js
import { Writable } from 'node:stream';
import Sink from '@eik/sink';

export class SinkCustom extends Sink {
    constructor() {
        super();
    }
    write() {
        return new Promise(resolve, reject) {
            const to = new Writable();
            resolve(to);
        }
    }
}
```

### read(filePath)

| argument | default | type     | required | details                                                                                             |
| -------- | ------- | -------- | -------- | --------------------------------------------------------------------------------------------------- |
| filePath | `null`  | `string` | `true`   | Pathname of the file relative to `root` in the [file structure](/docs/server_file_structure) in Eik |

This method is called when a file is to be read from storage. The method must return a `Promise` and resolve with a `ReadableStream` when the storage is ready to be read from. Upon any errors, the promise should reject with an `Error` object

```js
import { Readable } from 'node:stream';
import Sink from '@eik/sink';

export class SinkCustom extends Sink {
    constructor() {
        super();
    }
    read() {
        return new Promise(resolve, reject) {
            const to = new Readable();
            resolve(to);
        }
    }
}
```

### delete(filePath)

| argument | default | type     | required | details                                                                                             |
| -------- | ------- | -------- | -------- | --------------------------------------------------------------------------------------------------- |
| filePath | `null`  | `string` | `true`   | Pathname of the file relative to `root` in the [file structure](/docs/server_file_structure) in Eik |

This method is called when a file is to be deleted from storage. The method must return a `Promise` and resolve with no value when the file is deleted from storage. If any errors occur, the promise should reject with an `Error` object

### exist(filePath)

| argument | default | type     | required | details                                                                                             |
| -------- | ------- | -------- | -------- | --------------------------------------------------------------------------------------------------- |
| filePath | `null`  | `string` | `true`   | Pathname of the file relative to `root` in the [file structure](/docs/server_file_structure) in Eik |

This method is called to check if a file exists in storage. The method must return a `Promise` and resolve with no value if the file exists in storage. If the file does not exist the promise should reject with no error object. Upon any errors, the promise should reject with an `Error` object.

## Properties

A sink must implement the following properties:

### .metrics

A getter for a [metric stream](https://github.com/metrics-js/client). The metric stream can be used to emit metrics from the sink into [the overall metric stream](/docs/server_metrics) in the server.

Example:

```js
import Metrics from @metrics/client';
import Sink from @eik/sink';

export class SinkCustom extends Sink {
    constructor() {
        super();
        this._metrics = new Metrics();
        this._counter = this._metrics.counter({
            name: 'eik_custom_sink',
            description: 'Counter measuring access to the custom sink',
        });
    }
    write(filePath, contentType) {
        return new Promise(resolve, reject) {
            this._counter.inc();

        }
    }
}
```

## Validation

We recommend you validate the arguments for all methods. The [Eik sink interface](https://github.com/eik-lib/sink) contain static methods to do so which can be used when implementing a sink:

```js
import Sink from @eik/sink';

export class SinkCustom extends Sink {
    constructor() {
        super();
    }
    write(filePath, contentType) {
        return new Promise(resolve, reject) {
            try {
                super.constructor.validateFilePath(filePath);
                super.constructor.validateContentType(contentType);
            } catch (error) {
                reject(error);
                return;
            }

        }
    }
}
```

## Security

A sink should take care of protecting against [Path Traversal](https://owasp.org/www-community/attacks/Path_Traversal). It should not be possible to access files outside the `root` of the file structure in Eik by passing in a hostile pathname through the REST API of Eik. Each `filePath` argument on each method should be checked for such.

Please see OWASPs guide on preventing [Path Traversal](https://github.com/OWASP/wstg/blob/master/document/4-Web_Application_Security_Testing/05-Authorization_Testing/01-Testing_Directory_Traversal_File_Include.md).
