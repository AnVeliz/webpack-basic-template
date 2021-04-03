const path = require('path');
const { merge } = require('webpack-merge');

const basic = require('./webpack.config');

module.exports = merge(basic, {
    entry: './src/index.js',
    mode: 'production',
    output: {
        filename: '[name].[contentHash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
});