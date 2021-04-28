import React, { Dispatch, Reducer, ReducerAction, ReducerState, useReducer, useState } from 'react'


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



export default function TestHandImpUseReducerHook() {
  const [state, dispatch] = myUseReducer(reducer, { n: 100 })
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

function myUseReducer<R extends Reducer<any, any>, I>(
  reducer: R,
  initializerArg: I & ReducerState<R>,
  initializer?: (arg: I & ReducerState<R>) => ReducerState<R>
): [ReducerState<R>, Dispatch<ReducerAction<R>>] {
  const initialState = !!initializer ? initializer(initializerArg) : initializerArg;
  const [state, setState] = useState(initialState)
  function dispatch(action: ReducerAction<R>) {
    const res = reducer(state, action);
    setState(res)
  }
  return [state, dispatch]
}
