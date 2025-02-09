const path = require("path");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: "./src/scripts/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.module\.scss$/i, // modules
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    plugins: [
        new ESLintPlugin({
            extensions: ['ts', 'tsx'], // Ensure ESLint checks TypeScript files too
            overrideConfigFile: path.resolve(__dirname, 'eslint.config.mjs'),
            configType: "flat"
        }),
        new ForkTsCheckerWebpackPlugin({
            async: false, // Makes the process synchronous so it runs before build
        }),
    ],
};