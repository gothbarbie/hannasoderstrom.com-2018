import axios from 'axios'

import { SET_RECENTLIES, LOADING } from './types'

export const fetchRecentlies = () => async dispatch => {
  dispatch({ type: LOADING, payload: true })
  try {
    Promise.resolve(
      await axios.get('http://hannasoderstrom.com/admin/wp-json/wp/v2/posts')
    )
      .then(
        async res =>
          await Promise.all(
            res.data.map(async item => {
              if (item.featured_media) {
                const { data } = await axios.get(
                  `http://hannasoderstrom.com/admin/wp-json/wp/v2/media/${
                    item.featured_media
                  }`
                )
                return {
                  ...item,
                  media: data,
                }
              }
              return item
            })
          )
      )
      .then(res => dispatch({ type: SET_RECENTLIES, payload: res }))

    // dispatch({ type: SET_RECENTLIES, payload: data })
  } catch (error) {
    throw new Error(error)
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
    throw new Error(error)
  }
  dispatch({ type: LOADING, payload: false })
}
