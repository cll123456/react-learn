import { Middleware, MiddlewareAPI,  Reducer, StoreCreator } from "redux";

/**
 * 实现dispatch中间件
 */
export default function (...args: Middleware[]) {
  // 返回一个createStore创建函数
  return function (createStore: StoreCreator) {

    // 返回一个函数，创建store,并且接收一个 reduce和defaultState的函数

    return function (reducer: Reducer, defaultState?: any) {
      // 创建store
      const store = createStore(reducer, defaultState)
      // 获取dispatch创建函数
      const minStore: MiddlewareAPI = {
        dispatch: store.dispatch,
        getState: store.getState
      }
      const dispatches = args.map(p => p(minStore))

      // 最终需要返回的dispatch

      // 洋葱模型中间件，需要先执行最外层的dispatch中间件，对于数组来说，需要先执行最后一个dispatch
      const dispatch = compose(...dispatches);
      const finDispatch = dispatch(store.dispatch)

      return {
        ...store,
        dispatch: finDispatch
      }
    }
  }
}
/**
 * 组合函数，接收多个函数，然后从后往前运行，每一个运行的结果返回给前面一个函数，最终返回一个函数。
 * @param funcs 传入的多个函数，
 * @returns 
 */
function compose(...funcs: ((...args: any) => any)[]) {
  // 传入函数参数的数量
  if (funcs.length === 0) {
    return (fcp: any) => fcp;
  }
  // 如果参数只有一个，那么直接执行改函数的返回结果
  else if (funcs.length === 1) {
    return funcs[0];
  } else {
    return funcs.reduce((a, b) => (...args) => a(b(args)))
  }
}