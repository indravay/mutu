import state from './state'
import mutations from './mutations'
import actions from './actions'

const setting = {
  namespaced:true,
  state,
  mutations,
  actions,
}

export default setting