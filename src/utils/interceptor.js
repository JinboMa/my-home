import qs from 'qs'

export function errors (err) {
  return Promise.reject(err)
}
export function interceptors (config) {
  let type = config.type
  if (type === 'formData') {
    config.headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
    config.data = qs.stringify(config.data)
    return config
  } else {
    return config
  }
}
