import { combineReducers } from 'redux'
import recentlies from './recentlies'
import loading from './loading'

export default combineReducers({
  recentlies,
  loading,
})
