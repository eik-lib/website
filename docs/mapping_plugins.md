---
id: mapping_plugins
title: Build Tool Plugins
sidebar_label: Build Tool Plugins
---

Eik provides a set of build tool plugins that cater for applying Import Maps ahead of time. 

The common functionallity of these plugins is that they will, if found, load the `eik.json` file in a project and fetch any defined Import Maps before applying the values within to the code the build tool is processing.

When using a build tool to apply an Import Map ahead of time, the build process should be run before a module is published to an Eik server.

## Available plugins

The following build tool plugins are available:

 - [Rollup](https://github.com/eik-lib/rollup-plugin)
 - [ESBuild](https://github.com/eik-lib/esbuild-plugin)
 - [PostCSS](https://github.com/eik-lib/postcss-plugin)
 
