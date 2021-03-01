import React, { Component } from 'react'
import Input from '.'
interface IInputTestS {
  /**
  * 属性值
  */
  value: any,
}
export default class InputTest extends Component<{}, IInputTestS> {
  state:IInputTestS = {
    value: 1
  }
  change = (v: any) => {
    this.setState(pre => ({
      value: v
    }))
  }
  render() {
    return (
      <div>
        <Input 
        value={this.state.value} 
        name='test' 
        onChange={this.change}></Input>
      </div>
    )
  }
}
