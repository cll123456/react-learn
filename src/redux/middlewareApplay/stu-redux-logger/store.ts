import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'
import userLoginReducer from './reducer/userLoginReducer'

export default createStore(
  combineReducers({
    userLogin: userLoginReducer
  }),
  applyMiddleware(
    logger
  )
)