import { combineReducers } from 'redux'
import recentlies from './recentlies'
import recently from './recently'
import loading from './loading'
import error from './error'

export default combineReducers({
  recentlies,
  recently,
  loading,
  error,
})
