let port = 8888
let proxy = true
let url = ['47.52.243.117', '8000']
// config for development
const config = {
  port,
  proxy,
  proxyTables: [
    {
      ip: url[0],
      port: url[1],
      url: '/rest'
    }
  ]
}

process.env.PORT = config.port
process.env.NODE_ENV = proxy ? 'proxy' : 'development'

module.exports = config
