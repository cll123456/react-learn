import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { asyncDecrease, asyncIncrease,autoIncrease,decrease, increase, stopAutoIncrease } from '../actions/counter'
import store from './../store'

interface ICounter {
  n: number,
  onIncrease:() => void,
  onDecrease:() => void,
  onAsyncIncrease: () => void,
  onAsyncDecrease: () => void,
  onAutoIncrease: () => void,
  onStopAutoIncrease: () => void,
}

 function Counter(props: ICounter) {
  return (
    <div>
      <p>{props.n}</p>
      <div>
        <button onClick={props.onIncrease}>+</button>
        <button onClick={props.onDecrease}>-</button>
        <button onClick={props.onAsyncIncrease}>异步+</button>
        <button onClick={props.onAsyncDecrease}>异步-</button>
        <button onClick={props.onAutoIncrease}>自动增长</button>
        <button onClick={props.onStopAutoIncrease}>停止自动增长</button>
      </div>
    </div>
  )
}

const stateType = store.getState()

/**
 * 映射仓库的属性给组件
 * @param state 
 * @returns 
 */
function mapStateToProps(state:typeof stateType){
  return {
    n: state.counterReducer
  }
}
/**
 * 映射dispatch 函数
 * @param dispatch 
 * @returns 
 */
function mapDispatchToProps(dispatch:Dispatch){
  return {
    onIncrease:() => {
      dispatch(increase())
    },
    onDecrease:() => {
      dispatch(decrease())
    },
    onAsyncIncrease: () => {
      dispatch(asyncIncrease())
    },
    onAsyncDecrease: () => {
      dispatch(asyncDecrease())
    },
    onAutoIncrease:()=>{
      dispatch(autoIncrease(1))
    },
    onStopAutoIncrease: () => {
      dispatch(stopAutoIncrease())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)