import { Action, } from 'redux';
import {createStore,bindActionCreator} from './principle'


interface IState {
  n: number
}
interface IAction {
  type: 'increase' | 'decrease',
  payload?: unknown
}

//创建一个reducer 给 store中添加一个引用
function reducer(state: IState & any, action: IAction) {
  switch (action.type) {
    case 'increase':      
      return { n: +state.n + 1 };
    case 'decrease':
      return { n: +state.n - 1 };
    default:
      return state;
  }
}

const store = createStore(reducer, {n: 2});


const action = () => ({
  type: 'decrease',
})

const action2 = () => ({
  type: 'decrease',
})


const unlinster = store.subscribe(() => {
  console.log(store.getState(),'----getState-======');
})

const bindAction = bindActionCreator({action,action2 }, store.dispatch)
bindAction.action();
bindAction.action2();


