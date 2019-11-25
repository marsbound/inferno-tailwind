"use strict";

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.html", "./src/**/*.js"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new Dotenv()
  ],
  resolve: {
    extensions: ["*", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development"
            }
          },
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [
                require("tailwindcss"),
                require("autoprefixer"),
                ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
              ]
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader"
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "public/image"
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
