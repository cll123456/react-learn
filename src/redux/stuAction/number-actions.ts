/**
 * action 类型的枚举
 */
export enum ENumber {
  set = 'set',
  increase = 'increase',
  decrease = 'decrease'
}

/**
 * 
 * @param n 设置action
 * @returns 
 */
const setAction = (n: number) => {
  return {
    type: ENumber.set,
    payload: {n: n}
  }
}
/**
 * 添加
 * @returns 
 */
const increaseAction = () => {
  return {
    type: ENumber.increase
  }
}

/**
 * 减少
 * @returns 
 */
const decreaseAction = () => {
  return {
    type: ENumber.decrease
  }
}

export default {
  setAction,
  increaseAction,
  decreaseAction
}