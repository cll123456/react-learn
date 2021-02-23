import React, { Component } from 'react'
/**
 * 每一个radio的对象类型
 */
type optionsObj = {
  value: string | number,
  label: string | number
}

interface ISelectP {
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
  data: optionsObj[]
  /**
   * change 事件
   */
  onChange: (v: any, name: string, e: React.ChangeEvent<HTMLSelectElement>) => void,
}

export default class Select extends Component<ISelectP> {
  /**
   * 获取options
   */
  getOptions = (): JSX.Element[] => {
    return this.props.data.map(p => {
      return (
        <option key={p.value} value={p.value}>{p.label}</option>
      )
    })
  }
  render() {
    return (
      <>
        <select
          value={this.props.value}
          onChange={e => this.props.onChange(e.target.value, this.props.name, e)}
          name='test'
        >
          {this.getOptions()}
        </select>
      </>
    )
  }
}
