import { combineReducers } from "redux";
import { counterReducers } from './counter'
import { studentReducers } from './student'

export default combineReducers({
  counterReducers,
  studentReducers
})