import { applyMiddleware, combineReducers, createStore } from 'redux'
import userListReducer from './reducers/userListReducer'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import logger from 'redux-logger'
import { userList } from './types/common'
// import { thunk } from './reducer-thunk'

export default createStore(
  combineReducers({
    userListReducer
  }), applyMiddleware(
    thunk as ThunkMiddleware<userList>,
    logger
  ))