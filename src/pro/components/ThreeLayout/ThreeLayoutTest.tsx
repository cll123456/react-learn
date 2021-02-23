import React, { Component } from 'react'
import ThreeLayout from '.'

export default class ThreeLayoutTest extends Component {
  render() {
    return (
      <div>
        <ThreeLayout 
        left={<div>我是左侧区域</div>}
        right={<div>我是左侧区域</div>}
        >
          <div>我是主要的区域</div>
        </ThreeLayout>
      </div>
    )
  }
}
