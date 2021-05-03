import { call, delay, put, take, takeEvery } from "redux-saga/effects";
import { asyncDecrease, asyncIncrease } from "../../action/counter";
import { counterType } from "../../types/counter";

/**
 * counter具有副作用的增加数据
 */
export default function* () {
  yield takeEvery(counterType.asyncIncrease, asyncIncreaseCounter)
  yield takeEvery(counterType.asyncDecrease, asyncDecreaseCounter)
}

/**
 * 副作用增加counter的生成器
 */
function* asyncIncreaseCounter() {
  yield delay(1000);
  try {
    const res: string | number = yield call(asyncFuncs);
    yield put(asyncDecrease(res as number))
  } catch (err) {
    console.log(err);
  }
}
/**
 * 减少counter的副作用的生成器
 */
function* asyncDecreaseCounter() {
  console.log('asyncDecreaseCounter 执行了');
}

/**
 *副作用函数 
 * @returns 
 */
function asyncFuncs(): Promise<string | number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(10)
      } else {
        reject('我要报错')
      }
    }, 3000)
  })
}
