import { counterType } from "../../types/counter";
/**
 * 增加计数的action
 * @returns 
 */
export function asyncIncrease(num?: number){
  return {
    type: counterType.asyncIncrease,
    payload: {num: num || 1}
  }
}

/**
 * 异步减少计数action
 * @returns 
 */
export function asyncDecrease(num?: number){
  return {
    type: counterType.asyncDecrease,
    payload: {num: num || 1}
  }
}