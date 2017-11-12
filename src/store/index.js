import Vue from 'vue'
import Vuex from 'vuex'
import base from './base'
import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules,
  ...base
})

export default store
