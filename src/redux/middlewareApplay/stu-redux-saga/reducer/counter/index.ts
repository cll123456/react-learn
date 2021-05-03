import { counterAction, counterData, counterType } from "../../types/counter"

const initialState: counterData = {
  num: 10
}

/**
 * counter reducer
 */
export default (state = initialState, action: counterAction) => {
  switch (action.type) {
    case counterType.asyncDecrease:
      return { ...state, num: state.num - action.payload.num }
    case counterType.asyncIncrease:
      return { ...state, num: state.num + action.payload.num }
    default:
      return state
  }
}
