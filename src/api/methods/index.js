import fetch from '@/utils/fetch'

const methods = {
  test () {
    return fetch({
      url: '/test',
      method: 'get'
    })
  },

  login () {
    return fetch({
      url: '/login',
      method: 'get'
    })
  }
}

export default methods
