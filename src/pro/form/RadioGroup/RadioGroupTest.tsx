import React, { Component } from 'react'
import RadioGroup from '.'
/**
 * 按钮组
 */
interface IRadioGroupTestS {
  value: any,
  data: radioObj[]
}

/**
 * 每一个radio的对象类型
 */
type radioObj = {
  value: string | number,
  label: string | number
}
export default class RadioGroupTest extends Component<{}, IRadioGroupTestS> {
  state: IRadioGroupTestS = {
    value: 'football',
    data: [
      { value: 'football', label: '足球' },
      { value: 'basketball', label: '篮球' },
      { value: 'tennis', label: '网球' },
    ]
  }
  render() {
    return (
      <>
        <RadioGroup 
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
