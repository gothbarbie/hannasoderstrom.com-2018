import { LOADING } from '../actions/types'
import loading from './loading'

let initialState

describe('reducers/loading', () => {
  initialState = false

  it('returns initial state', () => {
    expect(loading(undefined, initialState)).toEqual(initialState)
  })

  it('sets loading', () => {
    const loadingStatus = true

    expect(
      loading(undefined, {
        type: LOADING,
        payload: loadingStatus,
      })
    ).toEqual(loadingStatus)
  })
})
