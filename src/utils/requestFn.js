import qs from 'qs'

function replaceIds (ids, url) {
  let result = url

  for (let i in ids) {
    let reg = new RegExp(`{${i}}`, 'g')
    result = result.replace(reg, ids[i])
  }

  return result
}

export default {
  errors (err) {
    return Promise.reject(err)
  },
  interceptors (config) {
    let type = config.type
    let ids = config.ids
    let url = config.url

    if (type === 'formData') {
      config.headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
      config.data = qs.stringify(config.data)
    }
    if (ids) {
      config.url = replaceIds(ids, url)
    }

    return config
  }
}
