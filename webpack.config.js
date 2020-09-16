/* eslint-disable @typescript-eslint/no-var-requires */
"use strict";

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

const config = {
  target: "node",
  entry: "./src/index.ts",
  plugins: [
    new CleanWebpackPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "shell.js",
  },
  devtool: "eval",
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader"
      }
    ]
  }
};

module.exports = config;
