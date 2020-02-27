import * as type from './types'
import Vue from 'vue'

const mutations = {
  [type.CLEAR_DATA] (state) {
    state.data = []
    state.detailData = []
  },
  [type.GET_DATA] (state, payload) {
    state.data = payload.data
    if(payload.last_page){
      state.page = payload.last_page
      state.perPage = payload.per_page
      state.totalData = payload.total
    }else{
      state.data = payload
    }
  },
  [type.GET_DETAIL_DATA] (state, payload) {
    state.detailData = payload.data
  }
  
}

export default mutations