import * as type from './types'
import Vue from 'vue'

const mutations = {
  [type.CLEAR_DATA] (state) {
    state.data = []
    state.detailData = []
  },
  [type.GET_DATA] (state, payload) {
    payload.data.forEach(function(item, index) {
      let nullValue = 0
      for (let [key, value] of Object.entries(item)) {
        if(value == null && (key != 'created_at' && key != 'updated_at')){
          nullValue++
        }
      }
      item.status = 15 - nullValue;
    })
    state.data = payload.data
    state.lastUpdate = payload.last_update
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