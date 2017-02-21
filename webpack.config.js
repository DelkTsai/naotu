var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, './assets'),
    filename: 'app.[hash:8].js'
  },
  module: {
    loaders: [
      {test: /\.js$/,loader: 'babel-loader',exclude: /node_modules/},
      {test: /\.css$/, loader: "style-loader!css-loader"}
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html'
  })]
};
