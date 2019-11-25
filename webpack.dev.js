"use strict";

var merge = require("webpack-merge");
var common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  resolve: {
    alias: {
      inferno: "inferno/dist/index.dev.esm.js"
    }
  },
  devServer: {
    contentBase: "./dist"
  }
});
