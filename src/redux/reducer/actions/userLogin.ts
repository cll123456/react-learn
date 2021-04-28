export enum EUserLogin {
  'login' = 'login'
}

export interface IIsLogin {
  isLogin: boolean
}
/**
 * 用户登录的接口数据
 */
export interface IAction {
  type: EUserLogin,
  payload: IIsLogin
}
/**
 * 用户登录action创建函数
 * @param data 
 * @returns 
 */
export const createUserLogin = (data: IIsLogin) => ({
  type: EUserLogin.login,
  payload: {...data}
})
