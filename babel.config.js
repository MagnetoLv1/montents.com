const { NODE_ENV } = process.env;

const options = {};
if (NODE_ENV === 'test') {
    options.env = {
        targets: {
            node: 'current'
        }
    };
}

const babelConfig = {
    plugins: ['@emotion'],
    presets: [['@choseohwan/babel-preset-react', options]]
};

module.exports = babelConfig;
