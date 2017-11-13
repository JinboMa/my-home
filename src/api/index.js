import Vue from 'vue'
import * as methods from './methods'

let api = {}
api.install = function (Vue, options) {
  Vue.prototype.$api = methods
}

Vue.use(api)

export default api
