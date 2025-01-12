const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {readdirSync} = require("node:fs");

const htmlDir = path.resolve(__dirname, "src/html")
const htmlFiles = readdirSync(htmlDir);
const multipleHtmlPlugins = htmlFiles.map(name => {
    return new HtmlWebpackPlugin({
        template: path.join(htmlDir, name),
        filename: name,
    });
});

module.exports = {
    entry: "./src/scripts/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "public/bundle.js",
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        ...multipleHtmlPlugins
    ],
};