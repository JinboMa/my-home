const config = require('../configs')

// don't change code
let tables = config.proxyTables
let proxyConfig = {}
let proxyTable = {}

tables.forEach(table => {
  proxyTable[table.path] = {
    target: `http://${table.ip}:${table.port}${table.path}`,
    changeOrigin: true,
    pathRewrite: {
      ['^' + table.path]: ''
    }
  }
})

proxyConfig = config.proxy
  ? { proxyTable, node_env: '"proxy"', proxy: true }
  : { proxyTable: {}, node_env: '"development"', proxy: false }

module.exports = proxyConfig