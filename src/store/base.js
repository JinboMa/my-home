import { LOGIN, QUIT, SET_TOKEN, REMOVE_TOKEN } from './mutation-types'
import { login } from '@/api/methods'
import Cookies from 'js-cookie'

export default {
  state: {
    isLogin: !!Cookies.get('token'),
    token: Cookies.get('token')
  },

  getters: {
    IS_LOGIN: state => state.isLogin,
    TOKEN: state => state.token
  },

  mutations: {
    [LOGIN]: state => {
      state.isLogin = true
    },

    [QUIT]: state => {
      state.isLogin = false
    },

    [SET_TOKEN]: (state, token) => {
      Cookies.set('token', token)
      state.token = token
    },

    [REMOVE_TOKEN]: state => {
      Cookies.remove('token')
      state.token = null
    }
  },

  actions: {
    async login_todo ({ commit, dispatch }, form) {
      let res = await login(form)
      let token = res.token

      commit(SET_TOKEN, token)
      commit(LOGIN)
    }
  }
}
