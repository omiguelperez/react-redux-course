'use strict'

const path = require('path')

module.exports = {
  entry: './source/server.js',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '..', 'built', 'server')
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
          presets: ['latest-minimal', 'react']
        }
      }
    ]
  },
  target: 'node',
  mode: 'production'
}
