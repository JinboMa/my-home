'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const { proxy } = require('./proxy-config')

module.exports = merge(prodEnv, {
  NODE_ENV: proxy ? '"proxy"' : '"development"'
})
