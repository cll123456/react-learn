import { ReducerState } from "react";

type anyObj = {
  [key: string]: TActionFunc
}

type TDispatch = (action: any) => any;


type resObj = {
  [key: string]: TActionFunc
}

type TActionFunc = (...agr: unknown[]) => { type: any, payload?: any }
/**
 * 传入的是一个对象中，对象包含一系列的action创建函数
 * @param actionCreator 
 * @param dispatch 
 */
function bindActionCreator(actionCreator: anyObj, dispatch: TDispatch): anyObj;
/**
 * 传入的是一个action函数
 * @param actionCreator 
 * @param dispatch 
 */
function bindActionCreator(actionCreator: TActionFunc, dispatch: TDispatch): TActionFunc;
/**
 * 实现方法
 * @param actionCreator 
 * @param dispatch 
 * @returns 
 */
function bindActionCreator(actionCreator: anyObj | TActionFunc, dispatch: TDispatch): anyObj | TActionFunc {
  if (typeof actionCreator === 'function') {
    return autoDispatchFunc(actionCreator, dispatch)
  } else if (typeof actionCreator === 'object') {
    let res: resObj = {}
    for (let key in actionCreator) {
      const actionFunc = actionCreator[key];
      res[key] = autoDispatchFunc(actionFunc, dispatch)
    }
    return res;
  } else {
    return {}
  }
}


function autoDispatchFunc(actionCreator: TActionFunc, dispatch: TDispatch) {
  return function (...arg: unknown[]) {
    const actions = actionCreator(...arg);
    return dispatch(actions)
  }
}

export default bindActionCreator