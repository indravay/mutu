import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth/index.js'
import user from './user/index.js'
import obat from './obat/index.js'
import setting from './setting/index.js'
import mutu from './mutu/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    errors: [],
    info: '',
    token: localStorage.getItem('token'),
    isDownload: false,
  },
  getters: {
    isAuth: state => {
        return state.token != "null" && state.token != null
    }
  },
  mutations: {
    SET_ERRORS(state, payload) {
      state.errors = payload
    },
    SET_INFO(state, payload) {
        state.info = payload
    },
    SET_TOKEN(state, payload) {
      state.token = payload
    },
    CLEAR_ERRORS(state) {
        state.errors = []
    },
    SET_DOWNLOAD(state, payload) {
        state.isDownload = payload
    },
  },
  actions: {
    
  },
  modules: {
    auth,
    user,
    obat,
    setting,
    mutu
  }
})
