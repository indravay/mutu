import $axios from '../../common/api.js'
import * as type from './types'

const actions = {

  getListSetting({ commit }, payload) {
    return new Promise((resolve, reject) => {
      $axios.get(`setting`).then((res) => {
        console.log(res)
        commit(type.GET_DATA, res.data)
        resolve(true)
      }).catch((error) => {
        commit('SET_ERRORS',error.response.data, {root:true})
      })
    })
  },

  updateSetting({ commit }, payload){
    return new Promise((resolve, reject) => {
      $axios.put(`setting`, payload.form).then((res) => {
        resolve(res.data.info)
      }).catch((error) => {
        commit('SET_ERRORS',error.response.data.error, {root:true})
        reject(error.response.data.info)
      })
    })
  },

}

export default actions