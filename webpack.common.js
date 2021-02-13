// pathモジュールを読み込んでいる(node.jsに履いている。output)
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/app.js", // エントリーポイントを設定
  output: {
    // 指定している出力設定
    // 出力は絶対パスで指定しないといけない。相対パスNG
    path: path.resolve(__dirname, "public"),
    // 出力ファイル設定。
    filename: "js/bundle.js",
  },
  plugins: [
    // new CleanWebpackPlugin({
    //   cleanOnceBeforeBuildPatterns: ["**/*", "!**.html"], //webpackから出力されていないhtmlを削除されないよう設定。
    // }),
    new HtmlWebpackPlugin({
      template: "./src/html/index.html", //
    }),
  ],
};
