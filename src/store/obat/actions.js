import $axios from '../../common/api.js'
import * as type from './types'

const actions = {

  getListObat({ commit }, payload) {
    return new Promise((resolve, reject) => {
      $axios.get(`obat?search=${payload.search}&page=${payload.page}`).then((res) => {
        commit(type.GET_DATA, res.data)
        resolve(true)
      }).catch((error) => {
        commit('SET_ERRORS',error.response.data, {root:true})
      })
    })
  },

  deleteObat({ commit }, payload){
    return new Promise((resolve, reject) => {
      $axios.delete(`obat/${payload.id}`).then((res) => {
        resolve(res.data.info)
      }).catch((error) => {
        commit('SET_ERRORS',error.response.data, {root:true})
        reject(error.response.data.info)
      })
    })
  },

  createObat({ commit }, payload){
    return new Promise((resolve, reject) => {
      $axios.post(`obat`, payload.form).then((res) => {
        resolve(res.data.info)
      }).catch((error) => {
        commit('SET_ERRORS',error.response.data.error, {root:true})
        reject(error.response.data.info)
      })
    })
  },

  updateObat({ commit }, payload){
    return new Promise((resolve, reject) => {
      $axios.put(`obat/${payload.form.id_obat}`, payload.form).then((res) => {
        resolve(res.data.info)
      }).catch((error) => {
        commit('SET_ERRORS',error.response.data.error, {root:true})
        reject(error.response.data.info)
      })
    })
  },

  // async deleteUser({ commit }, payload) {
  //   await $axios.delete(`api/user/${payload.id}`).then((res) => {
  //     resolve(res.data.info)
  //   }).catch((error) => {
  //     commit('SET_ERRORS',errors, {root:true})
  //     reject(error.response.data.info)
  //   })
  // },

  // async getListUser({ commit }, payload) {
  //   await $axios.get(`api/user/list?search=${payload.search}&page=${payload.page}`).then((res) => {
  //     if (res.status === 400){
  //       commit('SET_ERRORS',res.data, {root:true})
  //     } else if (res.status === 200) {
  //       commit(type.GET_DATA, res.data)
  //     }
  //   }).catch(error => {
  //     console.log(error)
  //     commit('SET_ERRORS',error.response.data, {root:true})
  //   })
  // },

  // async getDokter({ commit }) {
  //   await $axios.get('api/user/list?dokter=true').then((res) => {
  //     if (res.status === 400){
  //       commit('SET_ERRORS',res.data)
  //     } else if (res.status === 200) {
  //       commit(type.GET_DATA, res.data)
  //     }
  //   }).catch(error => {
  //     console.log(error)
  //     commit('SET_ERRORS',error.response.data, {root:true})
  //   })
  // },

  // async getFO({ commit }) {
  //   await $axios.get('api/userfo').then((res) => {
  //     if (res.status === 400){
  //       commit('SET_ERRORS',res.data)
  //     } else if (res.status === 200) {
  //       commit(type.GET_DATA_FO, res.data)
  //     }
  //   }).catch(error => {
  //     console.log(error)
  //     commit('SET_ERRORS',error.response.data, {root:true})
  //   })
  // },

  

}

export default actions