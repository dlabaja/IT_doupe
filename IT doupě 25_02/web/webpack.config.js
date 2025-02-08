const path = require("path");

module.exports = {
    entry: "./src/scripts/index.jsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.module\.scss$/i, // modules
                use: ["style-loader", {
                    loader: "css-loader",
                    options: {
                        modules: true,
                    },
                }, "sass-loader"],
            },
            {
                test: /\.scss$/i, // non-modules
                exclude: /\.module\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"], // Sass/Scss -> CSS -> inline CSS
            },
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            ["@babel/preset-react", { "runtime": "automatic" }],
                            "@babel/preset-typescript"
                        ],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'], // Webpack bude automaticky hledat .js a .jsx soubory
    },
};