import fetch from '@/utils/fetch'

const methods = {
  test () {
    return fetch({
      url: '/test',
      method: 'get'
    })
  }
}

export default methods
