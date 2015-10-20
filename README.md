# Timestamp Webpack Plugin

[![Dependency Status](https://david-dm.org/herereadthis/russano.svg)](https://david-dm.org/herereadthis/russano)
[![npm version](https://badge.fury.io/js/timestamp-webpack-plugin.svg)](https://www.npmjs.com/package/timestamp-webpack-plugin)

Emits a JSON file that contains timestamps of your Webpack build

## Install

```bash
npm install --save-dev timestamp-webpack-plugin 
```

## Configuration

```js
// Add to your Webpack config file
var path = require("path");
var TimestampWebpackPlugin = require('timestamp-webpack-plugin');

module.exports = {
  plugins: [new TimestampWebpackPlugin()]
};  
```

## Options

This fork outputs the number of **milliseconds** that have elapsed since January 1, 1970 at 00:00:00 GMT 

