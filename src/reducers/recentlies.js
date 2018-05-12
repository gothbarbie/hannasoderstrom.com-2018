import { SET_RECENTLIES } from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case SET_RECENTLIES:
      return action.payload
      
    default:
      return state
  }
}
