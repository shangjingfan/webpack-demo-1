var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
// const { title } = require('process');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js'
    // filename: 'index.[contenthash].js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [new HtmlWebpackPlugin({
    title: "master of time",
    template: 'src/assets/index.html'
  })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};




