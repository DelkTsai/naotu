var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    path: __dirname,
    filename: './assets/index.js'
  },
  module: {
    loaders: [
      {test: /\.js$/,loader: 'babel-loader',exclude: /node_modules/},
      {test: /\.css$/, loader: 'style!css'}
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html'
  })]
};
