import { SET_ERROR, RESET_ERROR } from '../actions/types'

export default (state = { error: false, message: {} }, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        error: true,
        message: action.payload,
      }

    case RESET_ERROR:
      return state

    default:
      return state
  }
}
