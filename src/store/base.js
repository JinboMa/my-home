import { LOGIN, QUIT } from './mutation-types'

export default {
  state: {
    isLogin: false
  },

  getters: {
    IS_LOGIN: state => state.isLogin
  },

  mutations: {
    [LOGIN]: state => {
      state.isLogin = true
    },

    [QUIT]: state => {
      state.isLogin = false
    }
  },

  actions: {
    login ({ commit, dispatch }) {
      commit(LOGIN)
    }
  }
}
