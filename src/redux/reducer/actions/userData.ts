export enum EUserType {
  /**
   * 新增
   */
  add = 'add',
  /**
   * 删除
   */
  del = 'del',
  /**
   * 修改
   */
  upd = 'upd'
}

export interface IID {
  id: string,
}

export interface IUserData {
  name: string,
  age?: number
}

/**
 * action的类型
 */
export interface IAction {
  type: EUserType,
  payload: IUserData & IID,
}

/**
 * 新增用户
 * @param payload 
 * @returns 
 */
export const createAddUserAction = (payload: (IUserData & IID)) => ({
  type: EUserType.add,
  payload
})

/**
 * 修改用户对象的数据
 * @param id 
 * @param upaData 
 * @returns 
 */
export const createUpdUserAction = (id: string, upaData: IUserData) => ({
  type: EUserType.upd,
  payload: { id, ...upaData }
})

/**
 * 删除用户
 * @param id 
 * @returns 
 */
export const createDelUserAction = (id: string) => ({
  type: EUserType.del,
  payload: { id }
})