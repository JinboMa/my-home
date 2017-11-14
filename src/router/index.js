import Vue from 'vue'
import Router from 'vue-router'
import common from './common'
import life from './life'
import work from './work'
import blog from './blog'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [...common, ...work, ...life, ...blog]
})
