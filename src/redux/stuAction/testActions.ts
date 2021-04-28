import { useReducer } from 'react'
import { createStore, bindActionCreators } from 'redux'
import { ENumber, default as numberAction } from './number-actions'

interface INumber {
  n: number
}


interface IAction {
  type: ENumber,
  payload?: INumber
}


function reducer(state: INumber & any, action: IAction) {
  switch (action.type) {
    case ENumber.increase:
      return { n: state.n + 1 }
    case ENumber.decrease:
      return { n: state.n - 1 }
    case ENumber.set:
      return { n: action.payload && action.payload.n }
    default:
      return { n: state.n }
  }
}

const store = createStore(reducer, { n: 10 })

const bindAction = bindActionCreators(numberAction, store.dispatch)
console.log(store.getState());

bindAction.increaseAction();
// store.dispatch(numberAction.setAction(12))
console.log(store.getState());