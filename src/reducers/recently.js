import { SET_RECENTLY } from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case SET_RECENTLY:
      return action.payload

    default:
      return state
  }
}
