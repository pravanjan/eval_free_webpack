const path = require("path");
module.exports = {
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "chrome-extension"),
    filename: "bundle.js",
  },
  mode: "production",
  devtool: "nosources-source-map",

  node: {
    global: false,
  },
  devServer: {
    contentBase: path.join(__dirname, "chrome-extension"),
  },
};
