import $axios from '../../common/api.js'
import * as type from './types'

const actions = {

  getListUser({ commit }, payload) {
    return new Promise((resolve, reject) => {
      $axios.get(`user/list?search=${payload.search}&page=${payload.page}`).then((res) => {
        commit(type.GET_DATA, res.data)
        resolve(true)
      }).catch((error) => {
        commit('SET_ERRORS',error.response.data, {root:true})
      })
    })
  },

  deleteUser({ commit }, payload){
    return new Promise((resolve, reject) => {
      $axios.delete(`user/${payload.id}`).then((res) => {
        resolve(res.data.info)
      }).catch((error) => {
        commit('SET_ERRORS',error.response.data, {root:true})
        reject(error.response.data.info)
      })
    })
  },

  resetUser({ commit }, payload){
    return new Promise((resolve, reject) => {
      $axios.post(`user/reset/${payload.id}`).then((res) => {
        resolve(res.data.info)
      }).catch((error) => {
        commit('SET_ERRORS',error.response.data, {root:true})
        reject(error.response.data.info)
      })
    })
  },

  createUser({ commit }, payload){
    return new Promise((resolve, reject) => {
      $axios.post(`register`, payload.form).then((res) => {
        resolve(res.data.info)
      }).catch((error) => {
        commit('SET_ERRORS',error.response.data.error, {root:true})
        reject(error.response.data.info)
      })
    })
  },

  changeProfile({ commit,dispatch }, payload){
    return new Promise((resolve, reject) => {
      $axios.put(`user/${payload.id}`, payload.form).then((res) => {
        dispatch('auth/getUser','',{root:true})
        resolve(res.data.info)
      }).catch((error) => {
        commit('SET_ERRORS',error.response.data.error, {root:true})
        reject(error.response.data.info)
      })
    })
  },

  changePassword({ commit }, payload){
    return new Promise((resolve, reject) => {
      $axios.put(`user/password/${payload.id}`, payload.form).then((res) => {
        resolve(res.data.info)
      }).catch((error) => {
        commit('SET_ERRORS',error.response.data.error, {root:true})
        reject(error.response.data.info)
      })
    })
  },

  

}

export default actions