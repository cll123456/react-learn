import React, { Component } from 'react'
import CheckboxGroup from '.'
/**
 * 按钮组
 */
interface ICheckboxGroupTestS {
  choose: string[],
  data: checkboxObj[]
}

/**
 * 每一个radio的对象类型
 */
type checkboxObj = {
  value: string,
  label: string | number
}

export default class CheckboxGroupTest extends Component<{}, ICheckboxGroupTestS> {
  state: ICheckboxGroupTestS = {
    choose: ['football'],
    data: [
      { value: 'football', label: '足球' },
      { value: 'basketball', label: '篮球' },
      { value: 'tennis', label: '网球' },
    ]
  }
  render() {
    return (
      <>
        <CheckboxGroup
          name='test'
          data={this.state.data}
          choose={this.state.choose}
          onChange={(v: string, name: string, e: React.ChangeEvent<HTMLInputElement>) => {
            let arr = [...this.state.choose];
            if (e.target.checked) {
              arr.push(v);
            } else {
              arr = arr.filter(f => f !== v);
            }
            this.setState(pre => ({
              choose: arr
            }))
          }} />
      </>
    )
  }
}
