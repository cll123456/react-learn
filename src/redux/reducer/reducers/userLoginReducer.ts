
import {IIsLogin,IAction,EUserLogin} from './../actions/userLogin'

const initialState:IIsLogin = {
  isLogin: false
}

/**
 * 用户登录的reducer
 */
export default (state = initialState, { type, payload }:IAction) => {
  switch (type) {
  case EUserLogin.login:
    return { ...state, ...payload }
  default:
    return state
  }
}
