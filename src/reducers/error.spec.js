import { SET_ERROR, RESET_ERROR } from '../actions/types'
import error from './error'

let initialState

describe('reducers/error', () => {
  initialState = {
    error: false,
    message: {},
  }

  it('returns initial state', () => {
    expect(error(undefined, initialState)).toEqual(initialState)
  })

  it('sets error', () => {
    const errorsContent = 'New Error'

    expect(
      error(undefined, {
        type: SET_ERROR,
        payload: errorsContent,
      })
    ).toEqual({
      error: true,
      message: errorsContent,
    })
  })

  it('resets error', () => {
    expect(error(undefined, { type: RESET_ERROR })).toEqual(initialState)
  })
})
