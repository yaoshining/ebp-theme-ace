'use strict';
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(_path) {
    return {
        context: _path,
        debug: false,
        devtool: 'cheap-source-map',
        output: {
            publicPath: '/',
            filename: '[name].js'
        },
        devServer: {
            outputPath: path.join(_path, 'dist')
        },
        plugins: [
            new CleanWebpackPlugin(['dist', 'assets'], {
                root: _path,
                verbose: true,
                dry: false
            }),
            new CopyWebpackPlugin([
                {
                    from: 'app/assets/styles/sass',
                    to: path.join(_path, '/assets/sass')
                }
            ])
        ]
    };
};