import { ActionType, EUserListActionTypes, userList } from "../types/common"

const initialState: userList = {
  userList: [
    { id: '1', name: 'cll', age: 12 },
    { id: '2', name: 'twinkle', age: 13 },
  ]
}

/**
 * userList reducer
 */
export default (state: userList = initialState, action: ActionType) => {
  switch (action.type) {
    case EUserListActionTypes.add:
      return ({ userList: [...state.userList, action.payload] })
    case EUserListActionTypes.upa:
      return state.userList.map(p => p.id === action.payload.id ? { ...p, ...action.payload } : p)
    case EUserListActionTypes.del:
      return state.userList.filter(f => f.id !== action.payload.id)
    case EUserListActionTypes.setMore:
      return ({ userList: [...state.userList, ...action.payload] })
    default:
      return state
  }
}
