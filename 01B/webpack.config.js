'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: '#inline-source-map',
  entry: './src/index.js',
  output: {
    filename: 'dist.js',
    path: path.resolve(__dirname, 'dist')
  }
};