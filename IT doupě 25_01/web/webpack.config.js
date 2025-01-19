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
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": [
                            "@babel/preset-env",
                            ["@babel/preset-react", {"runtime": "automatic"}]
                        ]
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Webpack bude automaticky hledat .js a .jsx soubory
    },
};