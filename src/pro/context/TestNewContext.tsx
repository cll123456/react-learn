import React, { Component } from 'react'
// 创建一个上下文
const ctx = React.createContext({ a: '' })
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

  render() {
    return (
      <div>
        {/* 使用上下文 */}
        <ctx.Consumer>
          {value => (
            <h3>我是子组件的子组件，我获取上下文中的数据：{value.a}</h3>
          )}
        </ctx.Consumer>
      </div>
    )
  }
}



export default class TestOldContext extends Component<{}, ITestOldContextS> {
  state: ITestOldContextS = {
    a: '测试',
    b: 0
  }

  // 给上下文中放入指
  getChildContext() {
    return {
      a: this.state.a
    }
  }
  render() {
    return (
      // 在父组件中赋值上下文
      <ctx.Provider value={{ a: this.state.a }}>
        <div>
          <h1>我是跟组件，  我自己的数据 a: {this.state.a} b:{this.state.b}</h1>
          <ChildA />
        </div>
      </ctx.Provider>
    )
  }
}
