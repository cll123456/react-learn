import React, { useReducer } from 'react'


type TN = {
  n: number
}

enum EAction {
  increase = 'increase',
  decrease = 'decrease'
}

interface IAction {
  type: EAction,
  payload?: TN
}

const reducer = (state: TN, action: IAction) => {
  switch (action.type) {
    case EAction.increase:
      return { n: state.n + 1 }
    case EAction.decrease:
      return { n: state.n - 1 }
    default:
      return { n: state.n }
  }
}



export default function TestUseReducerHook() {
  const [state, dispatch] = useReducer(reducer, { n: 100 })
  return (
    <div>
      <button onClick={() => {
        dispatch({ type: EAction.decrease })
      }}>-</button>
      {  state.n}
      <button onClick={() => {
        dispatch({ type: EAction.increase })
      }}> + </button>
    </div>
  )
}
