var webpack = require('webpack');
var path = require('path');
module.exports = {
  entry: {
    index: ['./src/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {test: /\.js$/,loaders: ['babel'],exclude: /node_modules/},
      {test: /\.css$/, loader: 'style!css'}
    ]
  },
};
