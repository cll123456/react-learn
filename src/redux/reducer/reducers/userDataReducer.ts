import { IID, IUserData, EUserType, IAction } from "../actions/userData"


/**
 * 初始用户的数据
 */
const initialState: (IUserData & IID)[] = [
  { id: '1', name: 'test', age: 12 },
  { id: '2', name: '测试', age: 22 },
]

/**
 * 管理用户的reducer
 */
export default (state = initialState, { type, payload }: IAction) => {
  switch (type) {
    case EUserType.add:
      return [...state, payload]
    case EUserType.upd:
      return state.map(p => p.id === payload.id ? { ...p, ...payload } : p);
    case EUserType.del:
      return state.filter(f => f.id !== payload.id);
    default:
      return state
  }
}
