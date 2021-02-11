var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const { title } = require('process');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js'
  },
  plugins: [new HtmlWebpackPlugin(
    { title: "abc" }
  )],
};



