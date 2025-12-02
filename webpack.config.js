const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        //publicPath: "/img", /* to specify image location for html , website URL in production */
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, '/')
        },
        watchFiles: ["./src/template.html"],
    },
    plugins: [new HtmlWebpackPlugin()],
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/i,
                use: ["file-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};