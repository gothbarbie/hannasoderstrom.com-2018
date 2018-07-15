import tv4 from 'tv4'
import stateSchema from './stateSchema'

export default ({ dispatch, getState }) => next => action => {
  next(action)

  if (!tv4.validate(getState().recentlies, stateSchema)) {
    console.warn('Fetched content failed validation.')
  }
}
