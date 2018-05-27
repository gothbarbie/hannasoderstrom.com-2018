import axios from 'axios'

import { SET_RECENTLIES, LOADING } from './types'

export const fetchRecentlies = () => async dispatch => {
  dispatch({ type: LOADING, payload: true })
  try {
    const { data } = await axios.get(
      'http://hannasoderstrom.com/admin/wp-json/wp/v2/posts'
    )
    dispatch({ type: SET_RECENTLIES, payload: data })
  } catch (error) {
    throw Error(error)
  }
  dispatch({ type: LOADING, payload: false })
}

export const fetchRecently = slug => async dispatch => {
  dispatch({ type: LOADING, payload: true })
  try {
    const { data } = await axios.get(
      `http://hannasoderstrom.com/admin/wp-json/wp/v2/posts?slug=${encodeURI(
        slug
      )}`
    )
    dispatch({ type: SET_RECENTLIES, payload: data })
  } catch (error) {
    throw Error(error)
  }
  dispatch({ type: LOADING, payload: false })
}
