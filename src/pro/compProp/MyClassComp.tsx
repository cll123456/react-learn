import React, { Component } from 'react'
interface MyFuncCompProps {
  // 测试数据
  num: number
}

export default class MyClassComp extends Component<MyFuncCompProps> {
  render() {
    return (
      <div>
        我是类组件,传过来的数字是：{this.props.num}
      </div>
    )
  }
}
