import React, { Component } from 'react'
import Select from '.'
/**
 * 按钮组
 */
interface ISelectTestS {
  value: any,
  data: optionsObj[]
}

/**
 * 每一个radio的对象类型
 */
type optionsObj = {
  value: string | number,
  label: string | number
}
export default class SelectTest extends Component<{}, ISelectTestS> {
  state: ISelectTestS = {
    value: 'basketball',
    data: [
      { value: 'football', label: '足球' },
      { value: 'basketball', label: '篮球' },
      { value: 'tennis', label: '网球' },
    ]
  }
  render() {
    return (
      <>
        <Select 
        value={this.state.value} 
        data={this.state.data} 
        name='test' 
        onChange={v => {
          this.setState(pre => ({
            value: v
          }))
        }} />
      </>
    )
  }
}
