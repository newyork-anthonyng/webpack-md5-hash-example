const webpack = require("webpack");
const path = require("path");
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  context: path.join(__dirname),

  entry: {
    entry1: "./entry1.js",
    entry2: "./entry2.js"
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[chunkhash].js"
  },

  plugins: [
    new CommonsChunkPlugin({
      name: "commons",
      minChunks: 2
    }),

    new CommonsChunkPlugin({
      name: "manifest"
    })
  ]
};
