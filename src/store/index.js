import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    errors: [],
    info: '',
    isDownload: false,
  },
  mutations: {
    SET_ERRORS(state, payload) {
      state.errors = payload
    },
    SET_INFO(state, payload) {
        state.info = payload
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
  
  }
})
