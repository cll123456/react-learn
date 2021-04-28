import { Action, createStore } from 'redux'

interface IState {
  n: number
}
interface IAction {
  type: 'increase' | 'decrease',
  payload?: unknown
}

//创建一个reducer 给 store中添加一个引用
function reducer(state: IState & any, action: Action) {
  switch (action.type) {
    case 'increase':      
      return { n: +state.n + 1 };
    case 'decrease':
      return { n: +state.n - 1 };
    default:
      return { n: +state.n };
  }
}

const store = createStore(reducer, { n: 10 })

console.log(store, 'store');

const action = {
  type: 'decrease',
}
store.dispatch(action)
console.log(store.getState(), '--=====------');
// window.store = store;
