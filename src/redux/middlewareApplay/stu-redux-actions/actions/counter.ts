import { createActions, handleActions } from "redux-actions";

/**
 * counter actions
 */
const counterActions = createActions({
  ADD: (n: number) => n,
  INCREASE: undefined,
  DECREASE: undefined,
  ASYNC_INCREASE: undefined,
  ASYNC_DECREASE: undefined
})
/**
 * counter actions
 */
export const { add, increase, decrease, asyncIncrease, asyncDecrease } = counterActions

/**
 * counter reducer
 */
export const counterReducers = handleActions({
  [add.toString()]: (state: number, { payload }) => state + payload,
  [increase.toString()]: (state: number) => state + 1,
  [decrease.toString()]: (state: number) => state - 1
}, 10)