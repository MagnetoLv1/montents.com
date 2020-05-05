const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = ({ config }) => {
    if (!config.resolve.plugins) {
        config.resolve.plugins = [];
    }

    config.resolve.plugins.push(new TsconfigPathsPlugin());

    const fileLoaderRule = config.module.rules.find((rule) =>
        rule.test.test('.svg')
    );
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
        test: /\.svg$/,
        issuer: {
            test: /\.(js|ts)x?$/
        },
        use: '@svgr/webpack'
    });

    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve('babel-loader'),
                options: {
                    presets: [['react-app', { flow: false, typescript: true }]]
                }
            },
            require.resolve('react-docgen-typescript-loader')
        ]
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};
