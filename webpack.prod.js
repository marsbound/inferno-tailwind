"use strict";

var merge = require("webpack-merge");
var CompressionPlugin = require("compression-webpack-plugin");
var BrotliPlugin = require("brotli-webpack-plugin");
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var CopyPlugin = require("copy-webpack-plugin");

var common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new OptimizeCSSAssetsPlugin({}),
    new CopyPlugin([
      {
        from: "./public",
        ignore: "*.DS_Store"
      }
    ]),
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|css|html|svg|ttf)$/,
      threshold: 10240,
      minRatio: 0.7
    }),
    new BrotliPlugin({
      asset: "[path].br[query]",
      test: /\.(js|css|html|svg|ttf)$/,
      threshold: 10240,
      minRatio: 0.7
    })
  ]
});
