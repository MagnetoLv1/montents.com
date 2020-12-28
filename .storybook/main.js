const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.tsx?$/,
            include: path.resolve(__dirname, '../src'),
            use: [
                {
                    loader: require.resolve('react-docgen-typescript-loader'),
                    options: {
                        tsconfigPath: path.resolve(__dirname, './tsconfig.json')
                    }
                }
            ]
        });

        config.resolve.plugins.push(new TsconfigPathsPlugin());
        config.resolve.extensions.push('.ts', 'tsx');

        return config;
    }
};
