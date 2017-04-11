const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');


const DIST_DIR = path.resolve(__dirname, "build");
const SRC_DIR = path.resolve(__dirname, "app");

const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "index.html", //from where to pick file
  filename: DIST_DIR + "/index.html", //where to copy that file
  inject: "body" //where to inject that file
});
const cleanWebpackPluginConfig = new CleanWebpackPlugin(["build"]);

const config = {
  entry: SRC_DIR + '/index.js', //from where to pick entry point
  output: {
    path: DIST_DIR + "/app", //where to place created/transpilled file
    filename: "bundle.js", // name of of transpilled file
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-2"]
        }
      }
    ]
  },
  //For webpack-dev-server add here or in command line
  // devServer: {
  //    contentBase: "./build",
  // },
  plugins: [
    htmlWebpackPluginConfig  
  ]
}

module.exports = config;