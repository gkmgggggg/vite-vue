import { createStore } from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'

// const defaultState = {
//   count: 0
// }

export default createStore({
  state,
  getters,
  actions,
  mutations,
  strict: import.meta.env.mode !== 'production'
  // state () {
  //   return defaultState
  // },
  // mutations: {
  //   increment (state: typeof defaultState) {
  //     state.count++
  //   }
  // },
  // actions: {
  //   increment (context) {
  //     context.commit('increment')
  //   }
  // },
  // getters: {
  //   double (state: typeof defaultState) {
  //     return 2 * state.count
  //   }
  // }
})
