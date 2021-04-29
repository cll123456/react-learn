import { Reducer, ReducerState } from "react";
import { Store, StoreEnhancer } from "redux";


export default function createStore  <R extends Reducer<any, any>, I>(reducer: R, initState?: I & ReducerState<R> & any, enhance?:StoreEnhancer):any {
  if (typeof reducer !== 'function') {
    throw new Error('reducer must be a function');
  }
  // 判断第二个参数是不是函数,如果是函数的话，说明传入的是一个applyMiddleware
  if(typeof initState === 'function'){
    enhance = initState;
    initState = undefined;
  }
  if(typeof enhance === 'function'){
    return enhance(createStore)(reducer, initState)
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