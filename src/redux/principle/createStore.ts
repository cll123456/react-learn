import { Reducer, ReducerState } from "react";


export default function <R extends Reducer<any, any>, I>(reducer: R, initState?: I & ReducerState<R> & any) {
  if (typeof reducer !== 'function') {
    throw new Error('reducer must be a function');
  }

  let currentReducer: R = reducer,  // 当前执行的reducer
    currentState: I = initState || undefined; // 当前执行的state

  let listeners: (() => void)[] = []
  /**
   * 获取当前的状态
   */
  const getState = () => {
    return currentState
  }
  /**
   * 分发
   */
  const dispatch = (action: any) => {
    if (!isPlainObj(action)) {
      throw new Error('action must be a plain-object!')
    }
    currentState = currentReducer(currentState, action)

    listeners.forEach(fn => {
      fn();
    })
  }
  /**
   * 判断一个对象是否是一个平面对象
   * @param p 
   * @returns 
   */
  const isPlainObj = (p: unknown) => {
    if (typeof p !== 'object') return false;
    else {
      return Object.getPrototypeOf(p) === Object.prototype
    }
  }
  /**
    * 获取随机字符串
    * @param length 
    * @returns 
    */
  const getRandom = (length: number = 4) => Math.random().toString(36).substr(2, length + 2);


  // 创建仓库的时候，需要执行一下 dispatch 函数
  dispatch({
    action: {
      type: `@@redux/INIT${getRandom().split('').join('.')}`
    }
  })

  /**
   * 监听函数
   * @param func 
   * @returns 
   */
  const subscribe = (func: () => void) => {
    listeners.push(func);
    let isRemove = false
    return function () {
      if (isRemove) {
        return
      }
      let index = listeners.indexOf(func);
      listeners.splice(index, 1);
      isRemove = true;
    }
  }
  return {
    getState,
    dispatch,
    subscribe
  }
}