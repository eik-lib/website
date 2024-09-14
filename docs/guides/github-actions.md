---
title: Publish to Eik on GitHub Actions
---

This guide describes how to use GitHub Actions to publish to an Eik server. It describes two different approaches:

- [Using Semantic Release](#using-semantic-release)
- [Using the Eik CLI](#using-the-eik-cli)

Choose the one you prefer.

## Prerequisites

Your repo needs to have access to an Eik login key. Store this as a [Secret you can use in GitHub Actions](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions).

In this guide we'll be using `EIK_TOKEN` as the secret name.

## Using Semantic Release

There is an [Eik plugin](https://github.com/eik-lib/semantic-release#readme) for [Semantic Release](https://semantic-release.gitbook.io/semantic-release) you can use to automatically update the version number in `eik.json` based on [conventional commits](https://www.conventionalcommits.org/).

To use it, update your `release.config.js` to add the plugin, and commit `eik.json` back to Git.

```js
export default {
	plugins: [
		"@eik/semantic-release",
		["@semantic-release/git", { assets: ["eik.json"] }],
	],
};
```

### Semantic release workflow

With the Eik plugin configured, update [your release workflow](https://semantic-release.gitbook.io/semantic-release/recipes/ci-configurations/github-actions#github-workflows-release.yml-configuration-for-node-projects) to pass on the `EIK_TOKEN` secret to `semantic-release`.

```yaml
- name: Release
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
    EIK_TOKEN: ${{ secrets.EIK_TOKEN }}
  run: npx semantic-release
```

## Using the Eik CLI

You can automate publishing to Eik using the [Eik CLI](/docs/reference/at-eik-cli/).

This example requires you manually update the version number in `eik.json`.

```yaml
name: Publish to Eik

on:
  push:
    branches:
      - main
    paths:
      - eik.json

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
          eik publish
```

### Automatically increment the patch version number

If you don't really care about the version number you can use the `eik version` command to increment the version number on CI.
The version will only be updated if the CLI detects there are changes to the files.

Remember to commit the updated `eik.json` back to your repository.

```yaml
name: Publish to Eik

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
          eik version || true
          eik publish

      - name: Commit updated eik.json if version changed
        # git diff --quiet will exit with code 0 if there are no changes.
        # if there _are_ changes (a new version), the right-hand side of || will run
        run: |
          git config --global user.name "github-actions[bot]"
          git config --global user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git diff --quiet || (git commit --all --message "chore: update version number in eik.json [skip ci]" && git push origin HEAD)
        shell: bash
```
