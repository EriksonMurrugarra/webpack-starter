const path = require("path");
const extractCSSPlugin = require("mini-css-extract-plugin");

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
    })
  ]
}