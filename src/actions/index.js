import axios from 'axios'

import { SET_RECENTLIES, LOADING, SET_ERROR, RESET_ERROR } from './types'

export const fetchRecentlies = () => async dispatch => {
  dispatch({ type: RESET_ERROR })
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
      .then(res => {
        const filtered = res.map(item => {
          return {
            id: item.id,
            title: item.title,
            content: item.content,
            date: item.date,
            excerpt: item.excerpt,
            slug: item.slug,
            media: {
              guid: {
                rendered:
                  item.media && item.media.guid.rendered
                    ? item.media.guid.rendered
                    : '',
              },
            },
          }
        })
        return dispatch({ type: SET_RECENTLIES, payload: filtered })
      })
  } catch (error) {
    Promise.resolve(error).then(res =>
      dispatch({ type: SET_ERROR, payload: res })
    )
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
    dispatch({ type: SET_ERROR, payload: error.data.message })
  }
  dispatch({ type: LOADING, payload: false })
}
