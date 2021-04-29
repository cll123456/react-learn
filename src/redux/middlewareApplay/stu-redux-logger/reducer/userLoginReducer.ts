import { createUserAction } from "../actions/userLoginAction";
import { EActionTypes, TUserLoginState } from "../types/userLoginTypes";


const initialState: TUserLoginState = {
  isLogin: false
}

export default (
  state = initialState,
  { type, payload }: ReturnType<typeof createUserAction>
) => {
  switch (type) {
    case EActionTypes.login:
      return { ...state, ...payload }
    default:
      return state;
  }
}
