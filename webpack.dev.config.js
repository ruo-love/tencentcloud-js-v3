const path = require("path");
module.exports = {
  mode: "development",
  entry: path.join(__dirname, "./src/main.ts"),
  output: {
    path: path.join(__dirname, "./dev_dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // 将样式插入到 DOM 中
          "css-loader", // 解析 CSS
          "sass-loader", // 编译 Sass/SCSS 到 CSS
        ],
      },
    ],
  },
};
