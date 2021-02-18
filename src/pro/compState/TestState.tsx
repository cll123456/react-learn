import React, { Component } from 'react'
// 定义一个状态的接口
interface IState {
  // 定义一个n,为number 类型
  n: number
}

export default class TestState extends Component<{}, IState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      n: 100
    }
  }

  change = () => {
    this.setState(pre => ({
      n: pre.n - 1
    }))
    this.setState(pre => ({
      n: pre.n - 1
    }))
    this.setState(pre => ({
      n: pre.n - 1
    }), () => {
      console.log('修改的结果', this.state.n);
    })

  }

  render() {
    console.log('render')
    return (
      <div>
        <p>状态值{this.state.n}</p>
        <button onClick={this.change}>修改值</button>
      </div>
    )
  }
}
