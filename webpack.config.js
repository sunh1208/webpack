const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  //   entry: "./src/index.js",
  mode: "development", //  development  or  production
  entry: {
    print: "./src/print.js",
    app: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js", //[hash][ext]
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Output Management", //页面title
      filename: "admin.html", //文件名字
      template: "src/index.html", //指定一个输出模版的路径
      //   favion:"",            //指定生成的icn
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["dist"], // 这个是非必填的
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {                 
              //   name: "[name].[ext]",
              name(file) {
                console.log(process.env.NODE_ENV, 999999999999);
                if (process.env.NODE_ENV === "development") {
                  return "[path][name].[ext]";
                }

                return "[name].[ext]";
              },
              outputPath: "images/", //输出的文件位置
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("process.env.NODE_ENV"),
    }),
  ],
};
