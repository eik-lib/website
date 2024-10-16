---
title: Publish images to Eik on GitHub Actions
---

This guide describes how to use GitHub Actions to publish an [image package](/docs/dependencies/images) to an Eik server.

## Prerequisites

Your repo needs to have access to an Eik login key. Store this as a [Secret you can use in GitHub Actions](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions).

In this guide we'll be using `EIK_TOKEN` as the secret name.

## Workflow

We automate publishing to Eik using the [Eik CLI](/docs/reference/at-eik-cli/).

This variant requires you update the version number in `eik-image.json` when you add or change a file. See [this alternative workflow](#automatically-increment-the-patch-version-number) if you want full automation.

```yaml
name: Publish images to Eik

on:
  push:
    branches:
      - main
    paths:
      - eik-image.json # only run when eik-image.json changes

jobs:
  publish:
    runs-on: [ubuntu-latest]
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20

      # you can also add @eik/cli to your devDependencies
      - run: npm install --global @eik/cli@^3

      - name: Publish to Eik
        run: |
          eik login --key ${{secrets.EIK_TOKEN}}
          eik publish --config eik-image.json
```

### Automatically increment the patch version number

This variant will run whenever the `main` branch changes.

You can use the `eik version --config eik-image.json` command to increment the version number on CI.
The version will only be updated if the CLI detects there are changes to the files.

Remember to commit the updated `eik-image.json` back to your repository.

```yaml
name: Publish images to Eik

on:
  push:
    branches:
      - main

jobs:
  publish:
    runs-on: [ubuntu-latest]
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20

      # you can also add @eik/cli to your devDependencies
      - run: npm install --global @eik/cli@^3

      - name: Publish to Eik
        run: |
          eik login --key ${{secrets.EIK_TOKEN}}
          eik version --config eik-image.json || true
          eik publish --config eik-image.json

      - name: Commit updated eik-image.json if version changed
        # git diff --quiet will exit with code 0 if there are no changes.
        # if there _are_ changes (a new version), the right-hand side of || will run
        run: |
          git config --global user.name "github-actions[bot]"
          git config --global user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git diff --quiet || (git commit --all --message "chore: update version number in eik-image.json [skip ci]" && git push origin HEAD)
        shell: bash
```
