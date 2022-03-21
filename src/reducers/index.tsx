import { combineReducers } from 'redux'
import dataReducer from './dataReducer'
import profileReducer from './profileReducer'

export default combineReducers({
  retailState: dataReducer,
  profileState: profileReducer
})