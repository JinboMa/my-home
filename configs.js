// config for development
const config = {
  port: 8888,
  proxy: true,
  proxyTables: [
    {
      ip: 'localhost',
      port: '8088',
      url: '/rest/itest/ui/v1'
    },
    {
      ip: 'localhost',
      port: '8088',
      url: '/site'
    }
  ]
}

process.env.PORT = config.port

module.exports = config
