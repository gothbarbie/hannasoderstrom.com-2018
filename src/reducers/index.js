import { combineReducers } from 'redux'
import recentlies from './recentlies'
import loading from './loading'
import error from './error'

export default combineReducers({
  recentlies,
  loading,
  error,
})
