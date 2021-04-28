import { createStore, combineReducers } from 'redux'
import { createAddUserAction, createDelUserAction, createUpdUserAction, IID, IUserData } from './actions/userData'
import { createUserLogin, IIsLogin } from './actions/userLogin'
import userDataReducer from './reducers/userDataReducer'
import userLoginReducer from './reducers/userLoginReducer'


const store = createStore(combineReducers({
  userLogin: userLoginReducer,
  userData: userDataReducer
}))

interface IState {
  userLogin?: IIsLogin,
  userData?: (IUserData & IID)[]
}


function reducer(state: IState = {}, action: any) {

  return {
    userLogin: userLoginReducer(state.userLogin, action),
    userData: userDataReducer(state.userData, action)
  }
}

console.log(store.getState());

store.dispatch(createUserLogin({ isLogin: true }))

store.dispatch(createAddUserAction({ name: '234432', id: '234', age: 2 }))
store.dispatch(createUpdUserAction('234', { name: 'sdfsdfsdf' }))
// store.dispatch(createDelUserAction('234'))
console.log(store.getState());

