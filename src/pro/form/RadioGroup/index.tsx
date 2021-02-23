import React, { Component } from 'react'
/**
 * 每一个radio的对象类型
 */
type radioObj = {
  value: string | number,
  label: string | number
}

interface IRadioGroup {
  /**
   * 选中的值
   */
  value: any,
  /**
   * 标签的name 值
   */
  name: string,
  /**
   * 数据集合
   */
  data: radioObj[]
  /**
   * change 事件
   */
  onChange: (v: any, name: string, e: React.ChangeEvent<HTMLInputElement>) => void,
}


export default class RadioGroup extends Component<IRadioGroup> {
  /**
   * 获取radios 
   */
  getRadios = (): JSX.Element[] => {
    return this.props.data.map(p => {
      return (
        <label key={p.value}>
          <input
            type='radio'
            value={p.value}
            checked={p.value === this.props.value}
            onChange={e => this.props.onChange(e.target.value, this.props.name, e)}
          />
          {p.label}
        </label>
      )
    })
  }

  render() {
    const rs = this.getRadios()
    return (
      <div>
        {rs}
      </div>
    )
  }
}

