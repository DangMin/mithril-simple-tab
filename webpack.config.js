const path = require('path')
const Webpack = require('webpack')
const Dashboard = require('webpack-dashboard/plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const rootPath = path.resolve(__dirname, 'src')
const outputPath = path.resolve(__dirname, 'public')

const config ={
  context: rootPath,
  entry: {
    'js/index': './js/index.es6',
    'css/index': './css/index.styl',
    'index': './index.html'
  },
  output: {
    path: outputPath,
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.es6$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.node$/, use: 'node-loader' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader'}) },
      { test: /\.html$/, use: 'html-loader' },
      { test: /\.styl$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!stylus-loader'}) }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/index.css'),
    new Dashboard(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.json', '.es6'],
    modules: [rootPath, 'node_modules']
  },
  resolveLoader: {
    extensions: ['.js'],
    modules: ['node_modules']
  },
  watch: true,
  target: 'web'
}

module.exports = config
