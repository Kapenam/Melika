const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: 'css-loader', include: /src/ }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Melika - Home',
      template: path.resolve('./', 'index.ejs'),
      filename: 'index.html',
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
}
