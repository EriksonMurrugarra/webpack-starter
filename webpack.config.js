const path = require("path");
const extractCSSPlugin = require("mini-css-extract-plugin");
const htmlPlugin = require('html-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'entry.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [extractCSSPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new extractCSSPlugin({
      filename: 'styles.css'
    }),
    new htmlPlugin({
      template: path.resolve(__dirname, 'index.html')
    }),
    new copyPlugin([{
      from: path.resolve(__dirname, 'images'),
      to: path.resolve(__dirname, 'images')
    }])
  ]
}