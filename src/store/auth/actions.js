import $axios from '../../common/api.js'
import * as type from './types'

const actions = {
  login({ commit }, payload) {
    localStorage.setItem('token', null)
    commit('SET_TOKEN', null, { root: true }) 
    return new Promise((resolve, reject) => {
        $axios.post('/login', payload)
        .then((response) => {
          console.log(response.status)
            if (response.status == 200) {
                localStorage.setItem('token', response.data.token)
                commit(type.USER_LOGIN, response.data)
                commit('SET_TOKEN', response.data.token, { root: true })
            } else {
                commit('SET_ERRORS', { invalid: 'Email/Password Salah' }, { root: true })
            }
            resolve(response.data)
        })
        .catch((error) => {
          if (error.response.status == 400) {
            commit('SET_ERRORS', error.response.data.errors, { root: true })
            reject(error.response.data);
          }
        })
    })
  },

  logout({ commit }, payload) {
    return new Promise((resolve, reject) => {
      $axios.get('/logout', payload).then((response) => {
        commit(type.USER_LOGOUT, null)
        resolve(response.data)
      }).catch((error) => {
        reject(error.response.data);
      })
    })
  },

  getUser({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
        $axios.get(`/user`)
        .then((response) => {
            commit(type.USER_LOGIN, response.data)
            resolve(true)
        })
    })
  }
}

export default actions