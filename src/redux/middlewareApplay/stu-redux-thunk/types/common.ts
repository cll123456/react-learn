
export enum EUserListActionTypes {
  'add' = 'add',
  'del' = 'del',
  'upa' = 'upa',
  'setMore' = 'setMore'
}

/**
 * user object type
 */
export interface IUserObj {
  id: string,
  name: string,
  age?: number
}
/**
 * update user object type
 */
export type updateUser = { id: string } & Partial<IUserObj>

/**
 * userList list type
 */
export type userList = {
  userList: IUserObj[]
}

/**
 * common action
 */
interface Action<T extends string, P> {
  type: T,
  payload: P
}

export type addAction = Action<EUserListActionTypes.add, IUserObj>

export type upaAction =  Action<EUserListActionTypes.upa, updateUser>

export type delAction =  Action<EUserListActionTypes.del, Extract<{ id: string },updateUser> >

export type setMoreAction = Action<EUserListActionTypes.setMore, IUserObj[]>

export type ActionType = addAction | upaAction | delAction | setMoreAction






