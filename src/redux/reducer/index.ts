import { createStore, combineReducers, Dispatch, Action, Store, applyMiddleware, Middleware, MiddlewareAPI } from 'redux'
import { createAddUserAction, createDelUserAction, createUpdUserAction, IID, IUserData } from './actions/userData'
import { createUserLogin, IIsLogin } from './actions/userLogin'
import userDataReducer from './reducers/userDataReducer'
import userLoginReducer from './reducers/userLoginReducer'

function logger1(store: MiddlewareAPI) {
  console.log(1);
  return function (nextDispatch: Dispatch) {
    console.log(11);
    
    return function (action: Action) {
      console.log('logger1中间件1', store);
      console.log('logger1中间件1,store的旧值：', store.getState());
      nextDispatch(action)
      console.log('logger1中间件1,store的新值：', store.getState())
      console.log(' ');

    }
  }
}

function logger2(store: MiddlewareAPI) {
  console.log(2);
  
  return function (nextDispatch: Dispatch) {
    console.log(22);
    
    return function (action: Action) {
      console.log('logger2中间件2', store)
  console.log('logger2中间件2,store的旧值：', store.getState());
  nextDispatch(action)
  console.log('logger2中间件2,store的新值：', store.getState())

    }
  }
}

// const logger2 = (store: MiddlewareAPI) => (nextDispatch: Dispatch) => (action: Action) => {
//   console.log('logger2中间件2', store)
//   console.log('logger2中间件2,store的旧值：', store.getState());
//   nextDispatch(action)
//   console.log('logger2中间件2,store的新值：', store.getState())
// }

// const store = createStore(
//   combineReducers({
//     userLogin: userLoginReducer,
//     userData: userDataReducer
//   }), applyMiddleware(logger1, logger2))
const store = applyMiddleware(logger1, logger2)(createStore)(reducer)

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


