'use strict'

const path = require('path')

module.exports = {
  entry: './source/client.js',
  output: {
    filename: 'app.js',
    path: path.join(__dirname, '..', 'built', 'statics')
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2015', 'es2017', 'react'],
          plugins: ['transform-es2015-modules-commonjs']
        }
      }
    ]
  },
  target: 'web',
  mode: 'production'
}
