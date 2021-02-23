import React, { Component } from 'react'
export default class MyClassComp extends Component{
  render() {
    return (
      <div>
        我是类组件,传过内容是：
        {this.props.children}
      </div>
    )
  }
}
