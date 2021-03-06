import $axios from '../../common/api.js'
import * as type from './types'

const actions = {
  getListRegistrasi({ commit }, payload) {
    return new Promise((resolve, reject) => {
      $axios.get(`registrasi?date_start=${payload.date_start}&date_end=${payload.date_end}&page=${payload.page}&search=${payload.search}`).then((res) => {
        commit(type.GET_DATA, res.data)
        resolve(true)
      }).catch((error) => {
        // commit('SET_ERRORS',error.response.data, {root:true})
        console.log(error)
      })
    })
  },

  getListRegistrasiFromSanata({ commit }, payload) {
    return new Promise((resolve, reject) => {
      $axios.get(`sanata?date_start=${payload.date_start}&date_end=${payload.date_end}`).then((res) => {
        resolve(res.data.info)
      }).catch((error) => {
        commit('SET_ERRORS',error.response.data, {root:true})
      })
    })
  },

  getDataForm({commit}, payload){
    return new Promise((resolve, reject) => {
      $axios.get(`mutu/${payload.type}/${payload.noreg}`).then((res) => {
        resolve(res.data)
      }).catch((error) => {
        reject(true)
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
  },

  updateMutu({ commit }, payload){
    return new Promise((resolve, reject) => {
      $axios.post(`mutu/${payload.type}/${payload.noreg}`, payload.form).then((res) => {
        resolve(res.data.info)
      }).catch((error) => {
        commit('SET_ERRORS',error.response.data.error, {root:true})
        reject(error.response.data.info)
      })
    })
  },
  
  
}

export default actions