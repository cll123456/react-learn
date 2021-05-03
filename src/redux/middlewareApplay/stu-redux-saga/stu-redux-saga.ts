import { asyncIncrease } from './action/counter'
import store from './store'

store.dispatch(asyncIncrease())