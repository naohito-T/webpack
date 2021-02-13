const { merge } = require("webpack-merge"); // webpack-merge 読み込み
const commonConfig = require("./webpack.common.js");
const path = require("path");

module.exports = merge(commonConfig, {
  mode: "development",
  watch: true,
  devtool: "eval-cheap-module-source-map",
  // devtool: "chape-module-eval-source-map",
  devServer: {
    open: true, // 起動後、ブラウザが自動で開くか。
    port: 9001, // 9000はだめだった。
    contentBase: path.resolve(__dirname, "public"), // コンテンツのルートディレクトリ
  },
});
