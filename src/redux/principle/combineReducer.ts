

type Reducer<S = any, A extends Action = AnyAction> = (
  state: S | undefined,
  action: A
) => S

 interface Action<T = any> {
  type: T
}

interface AnyAction extends Action {
  // Allows any extra properties to be defined in an action.
  [extraProps: string]: any
}

type ReducersMapObject<S = any, A extends Action = Action> = {
  [K in keyof S]: Reducer<S[K], A>
}

type StateFromReducersMapObject<M> = M extends ReducersMapObject<
  any,
  any
>
  ? { [P in keyof M]: M[P] extends Reducer<infer S, any> ? S : never }
  : never

type CombinedState<S> = EmptyObject & S

interface EmptyObject {
  readonly [$CombinedState]?: undefined
}

declare const $CombinedState: unique symbol

type ActionFromReducersMapObject<M> = M extends ReducersMapObject<
  any,
  any
>
  ? ActionFromReducer<ReducerFromReducersMapObject<M>>
  : never

type ActionFromReducer<R> = R extends Reducer<any, infer A> ? A : never

type ReducerFromReducersMapObject<M> = M extends {
  [P in keyof M]: infer R
}
  ? R extends Reducer<any, any>
  ? R
  : never
  : never

  // type ResMapObject<S = any, A extends Action = Action> = {
  //   [K in keyof S]:
  // }
export default function <M extends ReducersMapObject<any, any>>(
  reducer: M
): Reducer<
  CombinedState<StateFromReducersMapObject<M>>,
  ActionFromReducersMapObject<M>> {
  isValidate(reducer)

  // 返回一个函数
  return function (state: any, action: any) {
    // 遍历reducer,返回每一个reducer执行的结果
    let res: any = {};
    for (const key in reducer) {
      if (Object.prototype.hasOwnProperty.call(reducer, key)) {
        const re = reducer[key];
        res[key] = re(state, action)
      }
    }
    return res;
  }
}


function isValidate<M extends ReducersMapObject<any, any>>(reducer: M) {
  // 判断是否是对象
  if (typeof reducer !== 'object') {
    throw new Error('reducer must be an object!')
  }
  // 判断是否是一个平面对象
  if (!isPlainObj) {
    throw new Error('reducer must be a plain object!')
  }

  for (const key in reducer) {
    if (Object.prototype.hasOwnProperty.call(reducer, key)) {
      const re = reducer[key];
      let state = re(undefined, {
        type: getInitActionType()
      })
      if (state === undefined) {
        throw new Error('reducer must not be a undefined!')
      }
      // 做两次校验
      state = re(undefined, {
        type: getAgainActionType()
      })
      if (state === undefined) {
        throw new Error('reducer must not be a undefined!')
      }
    }
  }
}

/**
 * 判断是否为平面对象
 * @param obj 
 * @returns 
 */
function isPlainObj(obj: any) {
  if (typeof obj !== 'object') {
    throw new Error('obj must be a object!')
  } else {
    return Object.getPrototypeOf(obj) === Object.prototype
  }
}

/**
 * 初始化的随机字符串
 * @returns 
 */
function getInitActionType() {
  return `@@Redux/INIT${Math.random().toString(32).substr(2, 8).split('').join('.')}`
}
/**
 * 再一次检查的随机字符串
 * @returns 
 */
function getAgainActionType() {
  return `@@Redux/GET_AGAIN_ACTION_TYPE${Math.random().toString(32).substr(2, 8).split('').join('.')}`
}