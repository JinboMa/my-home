import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api'
import Mock from './mock'
// import css
import './style/var.css'
import './style/style.css'

// if node environment is development, and add the mock data.
process.env.NODE_ENV === 'development' && Mock()
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  api,
  template: '<App/>',
  components: { App }
})
