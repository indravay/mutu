import $axios from '../../common/api.js'
import * as type from './types'

const actions = {
  getListRegistrasi({ commit }, payload) {
    return new Promise((resolve, reject) => {
      $axios.get(`registrasi?date_start=${payload.date_start}&date_end=${payload.date_end}&page=${payload.page}&search=${payload.search}`).then((res) => {
        commit(type.GET_DATA, res.data)
        resolve(true)
      }).catch((error) => {
        commit('SET_ERRORS',error.response.data, {root:true})
      })
    })
  },

  getRegistrasiByID({commit}, payload){
    return new Promise((resolve, reject) => {
      $axios.get(`registrasi/${payload.noreg}`).then((res) => {
        resolve(res)
      }).catch((error) => {
        reject(true)
      })
    })
  }
  
}

export default actions