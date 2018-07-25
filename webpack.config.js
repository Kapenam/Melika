const path = require('path')

const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackExcludeEmptyAssetsPlugin = require('html-webpack-exclude-empty-assets-plugin')

module.exports = {
  context: path.resolve(__dirname, 'source'),
  entry: {
    index: './index.js',
    vendor: [
      'babel-polyfill',
      'axios',
      'react',
      'react-dom',
      'prop-types',
      'react-router-dom',
    ],
  },
  output: {
    filename: '[name]-[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    modules: ['source', 'node_modules'],
    alias: {
      images: path.resolve(__dirname, 'source/assets/images'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|gif|png|svg|ttf|ico)$/,
        use: {
          loader: 'file-loader',
          options: { name: '[path][name].[ext]' },
        },
      },
      {
        test: /\.(svg|ttf|eot|woff2?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                sourceMap: true,
                localIdentName: '[local]',
              },
            },
            { loader: 'postcss-loader', options: { sourceMap: true } },
          ],
          publicPath: '/',
        }),
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new ExtractTextPlugin('[name]-[hash].bundle.css', {
      allChunks: true,
    }),
    new HtmlWebPackPlugin({
      title: 'Melika',
      template: path.resolve('./', 'index.ejs'),
      filename: 'index.html',
      inject: 'body',
      favicon: path.resolve('./', 'favicon.ico'),
      files: {
        css: ['[name]-[hash].bundle.css'],
        js: ['vendor-[hash].bundle.js', 'index-[hash].bundle.js'],
        chunks: {
          vendor: {
            entry: 'vendor-[hash].bundle.js',
            css: [],
          },
          index: {
            entry: 'index-[hash].bundle.js',
            css: [],
          },
        },
      },
    }),
    new HtmlWebpackExcludeEmptyAssetsPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
    port: 4789,
    hotOnly: true,
    inline: true,
    historyApiFallback: true,
    stats: 'errors-only',
  },
}
