import * as types from './mutatiosn_type'
import { State } from './types'

const mutations = {
  [types.ADD_COUNT](state: State) {
    state.count++
  }
}

export default mutations
