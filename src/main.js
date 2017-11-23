import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import api from './api'
import Mock from './mock'
import packages from './packages'
// import css
import './style/var.css'
import 'bulma/css/bulma.css'
import './style/style.css'
import './style/keyframes.css'

Vue.use(packages)
// if node environment is development, and add the mock data.
process.env.NODE_ENV === 'development' && Mock()
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  api,
  template: '<App/>',
  components: { App }
})
