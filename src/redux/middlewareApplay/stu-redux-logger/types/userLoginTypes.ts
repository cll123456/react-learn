/**
 * 用户是否登录的类型
 */
export interface IUserLogin {
  isLogin: boolean
}
/**
 * 登录用户的action的枚举
 */
export enum EActionTypes {
  'login' = 'login'
}

/**
 * 是否登录state
 */
export type TUserLoginState = {
  isLogin: boolean
}