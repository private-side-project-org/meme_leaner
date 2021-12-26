const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

console.log("path", path.resolve(__dirname, "./src/index.js"));

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
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, "./src/assets/styles")],
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: ["node_modules", path.resolve(__dirname, "./src")],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
      publicPath: "/",
    },
    historyApiFallback: true,
    port: 8080,
  },
};
