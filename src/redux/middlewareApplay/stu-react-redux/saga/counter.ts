import { apply, call, cancel, delay, fork, put, race, take, takeEvery } from "@redux-saga/core/effects";
import { Task } from "@redux-saga/types";
import { asyncDecrease, asyncIncrease, add, reduce, autoIncrease, stopAutoIncrease } from "../actions/counter";
/**
 * 异步增加
 */
function* asyncIncreaseSaga() {
  const time: number = yield call(getRandomTime)
  yield delay(time)
  const num: number = yield call(getRandomNum);
  yield put(add(num))
}
/**
 * 异步减少
 */
function* asyncDecreaseSaga() {
  const time: number = yield apply(null, getRandomTime, []);
  yield delay(time);
  const num: number = yield apply(null, getRandomNum, []);
  yield put(reduce(num))
}

/**
 * 获取一个随机数
 * @returns 
 */
function getRandomNum(): Promise<number> {
  return new Promise(resolve => {
    resolve(Math.floor(Math.random() * 100) + 1);
  })
}

/**
 * 获取随机时间
 */
function getRandomTime(): Promise<number> {
  return new Promise(resolve => {
    resolve(Math.floor(Math.random() * 5000) + 1000)
  })
}

/**
 * 自动增长
 */
function* autoIncreaseSaga(...args: unknown[]) {
  while (true) {
    yield take(autoIncrease);
    const task: Task = yield fork(function*(){
      while(true){
        yield delay(1000);
        yield put(add(1))
      }
    })
    yield take(stopAutoIncrease)
    yield cancel(task)

  }
}
/**
 * counter saga
 */
export default function* () {
  yield takeEvery(asyncIncrease, asyncIncreaseSaga);
  yield takeEvery(asyncDecrease, asyncDecreaseSaga);
  yield fork(autoIncreaseSaga)
}