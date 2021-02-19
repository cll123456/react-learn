import React, { Component } from 'react'

export default class TestEvent extends Component {

  // 这个和state 的那个都是esnext的语法
  handle = () => {
    console.log(this);
  }
  render() {
    return (
      <div>
        <button onClick={this.handle}>请点击</button>
      </div>
    )
  }
}

