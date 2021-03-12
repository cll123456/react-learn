import React, { Component } from 'react'
import PropTypes from "prop-types";
// 类组件
interface ITestOldContextS {
  a: string,
  b: number
}
// 子组件1
class ChildA extends Component {
  render() {
    return (
      <div>
        <h2>我是子组件</h2>
        <ChildB></ChildB>
      </div>
    )
  }
}
// 子组件2
class ChildB extends Component {
  static contextTypes = {
    a: PropTypes.string
  }
  render() {
    return (
      <div>
        <h3>我是子组件的子组件，我获取上下文中的数据：{this.context.a}</h3>
        
      </div>
    )
  }
}


export default class TestOldContext extends Component<{}, ITestOldContextS> {
  state: ITestOldContextS = {
    a: '测试',
    b: 0
  }
  // 规定上下文中的类型
  static childContextTypes = {
    a: PropTypes.string,
  }
  // 给上下文中放入指
  getChildContext() {
    return {
      a: this.state.a
    }
  }
  render() {
    return (
      <div>
        <h1>我是跟组件，  我自己的数据 a: {this.state.a} b:{this.state.b}</h1>
      

        <ChildA />
      </div>
    )
  }
}
