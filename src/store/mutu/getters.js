const getters = {
  getDataByReg: (state) => (reg) => {
    return state.data.find(regis => regis.noreg === reg)
  }
}

export default getters