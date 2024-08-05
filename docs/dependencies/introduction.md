---
title: Package types
---

Previously you learned how to [start using Eik in an application](/docs/introduction/workflow), including how to do import mapping so shared dependencies only get downloaded, parsed and run once. For this to work, though, there must be shared dependencies available on the Eik server.

In the Managing dependencies section you'll learn how to:

- publish shared dependencies to the `npm` namespace on your Eik server
- how to create and publish import maps to your Eik server
- how to create aliases for both of the above

## Eik package types

It's worth mentioning at this stage that Eik differentiates between three types of packages:

- `npm`
- `map`
- `package`

You'll see this distinction in [`eik.json`](/docs/reference/eik-json/) and in the URL where your package gets published. Each package type has its own namespace. This is to avoid accidental naming collisions between, say, the `npm` module `lit` and the import map `lit`.

Application code should be published to the `package` namespace. This is also the default, if no other type is configured in `eik.json`.

## Naming and versioning packages

Packages published to Eik should follow the [npm module naming convention](https://github.com/npm/validate-npm-package-name) and [Semantic Versioning](https://semver.org/). This applies to all namespaces, although semantic versioning is less relevant for application code.

## Next steps

Let's learn how to publish a package to the `npm` namespace on Eik.
