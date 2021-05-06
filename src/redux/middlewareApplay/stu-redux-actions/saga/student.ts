import { call, delay, put, takeEvery } from "@redux-saga/core/effects";
import { getData, setData, setIsLoading } from "../actions/student";
import { studentObj } from "../types/student";

function* getStudentData() {
  console.log('执行了  getStudentData');
  yield put(setIsLoading(true))
  yield delay(1000)
  const list: studentObj[] = yield call(getStudentList)
  yield put(setData(list));
  yield put(setIsLoading(false))
}
/**
 * 模拟获取学生数据
 * @returns 
 */
function getStudentList(): Promise<studentObj[]> {
  return new Promise(resolve => {
    let res: studentObj[] = []
    for (let i = 0; i < 10; i++) {
      let obj: studentObj = {
        id: i.toString(),
        name: 'cll' + i,
        age: i
      }
      res.push(obj)
    }
    resolve(res)
  })
}


export default function* () {
  yield takeEvery(getData, getStudentData)
}


