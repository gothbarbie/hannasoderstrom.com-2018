import axios from 'axios'

import { SET_RECENTLIES } from './types'

export const fetchRecentlies = () => async dispatch => {
  try {
    const { data } = await axios.get(
      'http://hannasoderstrom.com/admin/wp-json/wp/v2/posts'
    )
    dispatch({ type: SET_RECENTLIES, payload: data })
  } catch (error) {
    throw Error(error)
  }
}
