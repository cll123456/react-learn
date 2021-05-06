import { all } from "@redux-saga/core/effects";
import counterSaga from './counter'
import studentSaga from './student'

export default function* () {
  yield all([counterSaga(), studentSaga()])
}