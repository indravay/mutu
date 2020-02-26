import * as type from './types'
import Vue from 'vue'

const mutations = {
  [type.CLEAR_DATA] (state) {
    state.data = []
  },
  [type.GET_DATA] (state, payload) {
    state.data = payload
  },
  
}

export default mutations