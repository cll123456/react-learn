import { asyncDecrease, asyncIncrease } from "../action/counter";

/**
 * 计时器模块的类型
 */
export enum counterType {
  'asyncIncrease' = 'async-increase',
  'asyncDecrease' = 'async-decrease'
}

/**
 * 计时器的值类型
 */
export interface counterData{
  num: number
}



/**
 * reducer action类型
 */
export type counterAction = ReturnType<typeof asyncDecrease> | ReturnType<typeof asyncIncrease>