var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            exclude: /node_modules/,
            include: APP_DIR,
            loader: 'babel'
        }]
    },
    plugins: [new HtmlWebpackPlugin({ template: 'src/client/assets/index.html' })]
};

module.exports = config;
