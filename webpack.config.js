var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'docs/js/'),
        filename: '[name].js'
    },
    mode: 'production',
    module: {
        rules: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader?sourceMap' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([
            './docs/*/*',
            './index.html',
            './favicon.ico'
        ]),
        new CopyWebpackPlugin([{
                context: path.join(__dirname, './src/css/pageThemes'),
                from: '*',
                to: '../pageThemes',
                force: true
            },
            {
                context: path.join(__dirname, './src/imgs'),
                from: '*',
                to: '../imgs',
                force: true
            },
            {
                context: path.join(__dirname, './src/css/themes'),
                from: '*',
                to: '../themes',
                force: true
            },
            {
                context: path.join(__dirname, './src'),
                from: "index.html",
                to: '../index.html',
                force: true
            },
            {
                context: path.join(__dirname, './src'),
                from: "favicon.ico",
                to: '../favicon.ico',
                force: true
            }
        ])
    ]
};