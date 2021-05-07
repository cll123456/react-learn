import { createActions, handleActions } from "redux-actions";


const actions = createActions({
  /**
   * 加
   */
  INCREASE: undefined,
  /**
   * 减少=
   */
  DECREASE: undefined,
  /**
   * 异步增加
   */
  ASYNC_INCREASE: undefined,
  /**
   * 异步减少
   */
  ASYNC_DECREASE: undefined,
  /**
   * 直接增加多少
   * @param n 
   * @returns 
   */
  ADD: (n: number) => n,
  /**
   * 直接减少多少
   * @param n 
   * @returns 
   */
  REDUCE: (n: number) => n,
  /**
   * 自动增长
   */
  AUTO_INCREASE: undefined,
  /**
   * 停止自动增长
   */
  STOP_AUTO_INCREASE: undefined
})

/**
 * 对外导出的counter action
 */
export const { increase, decrease, asyncIncrease, asyncDecrease, add, reduce, autoIncrease, stopAutoIncrease } = actions;

/**
 * counter 初始值
 */
export const counterInitState = 10

/**
 * counter reducer
 */
export const counterReducer = handleActions(
  {
    /**
     * 同步增加
     * @param state 
     * @returns 
     */
    [increase.toString()]: (state) => state + 1,
    /**
     * 同步减少
     * @param state 
     * @returns 
     */
    [decrease.toString()]: (state) => state - 1,
    /**
     * 增加多少
     * @param state 
     * @param param1 
     * @returns 
     */
    [add.toString()]: (state, { payload }) => state + payload,
    /**
     * 减少多少
     * @param state 
     * @param param1 
     * @returns 
     */
    [reduce.toString()]: (state, { payload }) => state - payload,
  },
  counterInitState)