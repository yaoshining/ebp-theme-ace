'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var NODE_DEV = process.env.NODE_ENV || 'production';
var DEVELOPMENT = NODE_DEV === 'production'? false : true;
var sassLoader = 'css?sourceMap!postcss!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true';

module.exports = function(_path) {


    var webpackConfig = {

        entry: {
            vendor: _path + '/app/src/index.vendor.js',
            app: _path + '/app/src/index.bootstrap.js'
        },

        output: {
            path: 'dist',
            // filename: '[name].js',
            publicPath: '/'
        },

        resolve: {
            modulesDirectories: ['node_modules', 'bower_components'],
            alias: {
                _appRoot:     path.join(_path, 'app', 'src'),
                _images:      path.join(_path, 'app', 'src', 'assets', 'images'),
                _stylesheets: path.join(_path, 'src', 'app', 'assets', 'styles')
            }
        },

        module: {
            loaders: [{
                test: /\.js$/,
                exclude: [
                    path.resolve(_path, 'node_modules'),
                    path.resolve(_path, 'bower_components')
                ],
                loader: 'babel',
                query: {
                    cacheDirectory: true
                }
            }, {
                test: /\.(scss|sass)$/,
                loader: DEVELOPMENT ? ('style!' + sassLoader) : ExtractTextPlugin.extract('style', sassLoader)
            }, {
                test: /\.(woff2|woff|ttf|eot|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loaders: [
                    "url?name=assets/fonts/[name]_[hash].[ext]"
                ]
            }]
        },

        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                _: 'lodash'
            }),
            new webpack.ResolverPlugin(
                new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
            ),
            new ExtractTextPlugin('assets/styles/css/[name]' + (DEVELOPMENT ? '' : '.[chunkhash]') + '.css', { allChunks: true }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: path.join(_path, 'app', 'tpl-index.html')
            })
        ]
    };

    return webpackConfig;
};