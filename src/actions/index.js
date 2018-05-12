import { SET_RECENTLIES } from './types'

export const init = () => async (dispatch) => {
  dispatch({ type: SET_RECENTLIES, payload: [] })
}
