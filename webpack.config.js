const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const WebpackCleanPlugin = require('webpack-clean');


/*
  This is our postCSS loader which gets fed into the next loader. I'm setting it up in it's own variable because its a didgeridog
*/

const postcss = {
  loader: 'postcss-loader',
  options: {
    plugins() { return [autoprefixer({ browsers: 'last 3 versions' })]; }
  }
};


const styles = {
  test: /\.(scss)$/,
  use: ExtractTextPlugin.extract(['css-loader', postcss, 'sass-loader'])
};


const config = {
  entry: {
    renaissance: './src/renaissance.scss'
  },
 
  output: {
    path: path.resolve(__dirname, '.'),
    filename: '[name]'
  },


  module: {
    rules: [styles]
  },

  plugins: [
    new WebpackCleanPlugin(['renaissance']),
    new ExtractTextPlugin('renaissance.css'),
  ]
};


module.exports = config;