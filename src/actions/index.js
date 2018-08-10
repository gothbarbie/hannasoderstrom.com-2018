// @flow
import axios from 'axios'

import { SET_RECENTLIES, LOADING, SET_ERROR, RESET_ERROR } from './types'

import type { Dispatch as ReduxDispatch } from 'redux'

export const fetchRecentlies = () => async (dispatch: ReduxDispatch<*>) => {
  dispatch({ type: RESET_ERROR })
  dispatch({ type: LOADING, payload: true })

  try {
    Promise.resolve(
      await axios.get('http://hannasoderstrom.com/admin/wp-json/wp/v2/posts')
    )
      .then(async res =>
        Promise.all(
          res.data.map(async item => {
            if (item.featured_media) {
              const { data } = await axios.get(
                `http://hannasoderstrom.com/admin/wp-json/wp/v2/media/${
                  item.featured_media
                }`
              )
              const itemWithMedia = {
                ...item,
                media: data,
              }
              return itemWithMedia
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

export const fetchRecently = (slug: string) => async (
  dispatch: ReduxDispatch<*>
) => {
  dispatch({ type: LOADING, payload: true })

  try {
    const URL = `http://hannasoderstrom.com/admin/wp-json/wp/v2/posts?slug=${encodeURI(
      slug
    )}`

    Promise.resolve(await axios.get(URL)).then(({ data }) => {
      dispatch({ type: SET_RECENTLIES, payload: data })
    })
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.data.message })
  }
  dispatch({ type: LOADING, payload: false })
}
