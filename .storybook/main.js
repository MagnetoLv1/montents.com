const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    typescript: {
        check: true,
        checkOptions: {
            tsconfig: "./tsconfig.json",
            eslint: true,
        },
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            tsconfigPath: "./tsconfig.json",
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    },
    webpackFinal: async (config) => {
        config.resolve.plugins.push(new TsconfigPathsPlugin());
        return config;
    }
};
