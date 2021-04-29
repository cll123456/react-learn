import { EActionTypes, TUserLoginState } from "../types/userLoginTypes";

/**
 * 用户是否登录
 * @param isLogin 
 * @returns 
 */
export const createUserAction = (payload: TUserLoginState) => ({
  type: EActionTypes.login,
  payload: payload
})