'use strict';
/*
  Using webpack as my bundler.
  Will compile and bundle CSS and JS
*/

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./js/app.js', './scss/main.scss'],
    output: {
        filename: 'bundle.js',
        // directory where bundle should be placed
        path: path.resolve(__dirname, 'dist')
    },
    module: {

      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            // Using BABEl for transpiling
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        },
        {
          // configuring file/font loader if needed
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'file-loader?name=fonts/[name].[ext]'
        },
        {
          // configuring sass / scss loader
          test: /\.(sass|scss)$/,
          loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
        }
      ]
    },
    plugins: [
    new ExtractTextPlugin({
      // this is the name of my bundled css file
      filename: '[name].bundle.css',
      allChunks: true,
    }),
  ],
};
