require('dotenv').config();

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/
            },
            use: ['@svgr/webpack']
        });

        if (!config.resolve.plugins) {
            config.resolve.plugins = [];
        }

        config.resolve.plugins.push(new TsconfigPathsPlugin());

        return config;
    }
};
