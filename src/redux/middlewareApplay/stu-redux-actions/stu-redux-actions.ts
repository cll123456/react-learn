import { asyncDecrease, asyncIncrease, decrease, increase } from './actions/counter'
import { getData } from './actions/student'
import store from './store'

window.increase = function(){
  store.dispatch(increase())
}

window.decrease = function(){
  store.dispatch(decrease())
}

window.asyncIncrease = function(){
  store.dispatch(asyncIncrease())
}

window.asyncDecrease = function(){
  store.dispatch(asyncDecrease())
}

window.getstu = function(){
  store.dispatch(getData())
}