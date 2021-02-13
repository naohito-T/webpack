const { merge } = require("webpack-merge"); // webpack-merge 読み込み
const commonConfig = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "production",
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false, // ライブラリのライセンスコメントなどを抽出したファイルが生成されるのを防ぐ。
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
});
