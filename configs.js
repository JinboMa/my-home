let proxy = true
let port = 8888
let url = ['47.52.243.117', '8000']
let paths = ['/rest']

let proxyTables = paths.map(path => {
  return {
    ip: url[0],
    port: url[1],
    path
  }
})
// config for development
const config = {
  port,
  proxy,
  proxyTables
}

process.env.PORT = config.port
process.env.NODE_ENV = proxy ? 'proxy' : 'development'

module.exports = config
