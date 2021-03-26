const path = require('path');

module.exports = {

    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        port: 4200,
    },

};