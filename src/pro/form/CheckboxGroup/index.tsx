import React, { Component } from 'react'
import { List } from '../common/hoc'
import { ICheckbox } from '../common/types'

/**
 * 每一个radio的对象类型
 */
type checkboxObj = {
  value: string ,
  label: string | number
}

interface ICheckboxGroupP {
  /**
   * 选中的值
   */
  choose: string[] ,
  /**
   * 标签的name 值
   */
  name: string,
  /**
   * 数据集合
   */
  data: checkboxObj[]
  /**
   * change 事件
   */
  onChange: (v: any, name: string, e: React.ChangeEvent<HTMLInputElement>) => void,
}


// /**
//  * 单个checkbox 组件
//  */
// class Checkbox extends Component<ICheckbox>{
//   render() {
//     return (
//       <label >
//         <input
//           type='checkbox'
//           name={this.props.name}
//           checked={this.props.choose.includes(this.props.info.value)}
//           value={this.props.info.value}
//           onChange={e => this.props.onChange(e.target.value, this.props.name, e)}
//         />
//         {this.props.info.label}
//       </label>
//     )
//   }
// }

// export default List(Checkbox)

// checkbox 不使用 高阶组件的形式
export default class CheckboxGroup extends Component<ICheckboxGroupP> {
/**
 * 获取checkbox
 */
  getCheckbox = ():JSX.Element[] => {
    return this.props.data.map(p => {
      return (
       <label key={p.value}>
          <input 
          type='checkbox'          
          name={this.props.name}
          checked={this.props.choose.includes(p.value)}
          value={p.value}
          onChange={e => this.props.onChange(e.target.value,this.props.name,e )}
          />
          {p.label}
       </label>
      )
    })
  }

  render() {
    return (
      <div>
       {this.getCheckbox()} 
      </div>
    )
  }
}
