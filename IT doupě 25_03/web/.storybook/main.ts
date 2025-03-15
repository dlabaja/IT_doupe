import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    "stories": [
        "../src/**/*.mdx",
        "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
        "@storybook/addon-styling-webpack",
        ({
            name: "@storybook/addon-styling-webpack",

            options: {
                rules: [
                    // SCSS support
                    {
                        test: /\.scss$/,
                        use: [
                            require.resolve("style-loader"),
                            {
                                loader: require.resolve("css-loader"),
                                options: {
                                    modules: {
                                        // Enable CSS Modules with naming convention for SCSS
                                        localIdentName: "[path][name]__[local]--[hash:base64:5]",
                                    },
                                },
                            },
                            {
                                loader: require.resolve("sass-loader"),
                            },
                        ],
                    },
                ],
            }
        })
    ],
    "framework": {
        "name": "@storybook/react-webpack5",
        "options": {}
    }
};
export default config;