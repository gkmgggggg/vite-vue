import * as types from './mutatiosn_type'
// import { State } from './types'

export const countPlus = ({ commit }: any) => {
  commit(types.ADD_COUNT)
}
