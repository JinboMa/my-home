const config = require('../configs')

// don't change code
let tables = config.proxyTables
let proxyConfig = {}
let proxyTable = {}

tables.forEach(table => {
  proxyTable[table.url] = {
    target: `http://${table.ip}:${table.port}${table.url}`,
    changeOrigin: true,
    pathRewrite: {
      ['^' + table.url]: ''
    }
  }
})

proxyConfig = config.proxy
  ? { proxyTable, node_env: '"proxy"', proxy: true }
  : { proxyTable: {}, node_env: '"development"', proxy: false }

module.exports = proxyConfig