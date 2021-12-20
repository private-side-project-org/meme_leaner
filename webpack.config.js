const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // start point to bundle files
  entry: path.resolve(__dirname, "./src/index.js"),
  // output path that to be emit bundled files
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: "/node_modules/",
        use: ["babel-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 8080,
  },
};
