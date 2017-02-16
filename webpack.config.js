var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    index: ['./index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?sourceMap', 'postcss']
      }]
  },
  postcss: function () {
    return [autoprefixer];
  },
};
