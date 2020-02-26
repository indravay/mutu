const getters = {
  getUser(state) {
    return state.currentUser
  },
  isAuth: state => {
    // return state.isLoggedIn
    if(localStorage.getItem('token')){
      
      return true
    }else{
      console.log(localStorage.getItem('token'))
      return false
    }
    
  }
}

export default getters