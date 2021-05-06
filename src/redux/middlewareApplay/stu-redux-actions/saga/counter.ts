import { call, delay, put, takeEvery } from "@redux-saga/core/effects";
import { add, asyncDecrease, asyncIncrease, decrease } from "../actions/counter";

/**
 * 异步增加的副作用
 */
function* asyncIncreaseSaga() {
  console.log('执行了asyncIncreaseSaga');
  yield delay(2000);
  const num: number = yield call(getRandomNum);
  yield put(add(num))

}

/**
 * 异步减少的副作用
 */
function* asyncDecreaseSaga() {
  console.log('执行了  asyncDecreaseSaga');
  yield delay(1000)
  yield put(decrease())
}

/**
 * 获取随机数字
 * @returns 
 */
function getRandomNum(): Promise<number> {
  return new Promise(resolve => {
    resolve(Math.floor(Math.random() * 10) + 1)
  })
}

export default function* () {
  yield takeEvery(asyncIncrease.toString(), asyncIncreaseSaga);
  yield takeEvery(asyncDecrease.toString(), asyncDecreaseSaga);
}