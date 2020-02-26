import * as type from './types'

const mutations = {
  [type.USER_LOGIN] (state, payload) {
    state.currentUser = Object.assign({}, payload.user, { token: payload.token })
    state.isLoggedIn = true
    // localStorage.setItem('user', JSON.stringify(state.currentUser))
    // if(payload.token){
    //   localStorage.setItem('token', payload.token)
    // }
  },
  
  [type.USER_LOGOUT] (state) {
    localStorage.removeItem('token')
    state.isLoggedIn = false
    state.currentUser = {}
  }
}

export default mutations