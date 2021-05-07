import { all } from '@redux-saga/core/effects'
import counterSaga from './counter'

export default function* () { 
 yield all([counterSaga()])
}