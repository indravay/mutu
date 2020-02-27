import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const mutu = {
  namespaced:true,
  state,
  mutations,
  getters,
  actions,
}

export default mutu