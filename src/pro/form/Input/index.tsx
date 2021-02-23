import React from 'react'
/**
 * input 的属性
 */
interface IInputP {
  /**
   * 属性值
   */
  value: any,
  /**
   * 表单的属性名字
   */
  name: string,
  /**
   * 输入框改变的函数
   */
  onChange: (value: any, name: string, e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: IInputP) {

  return (
    <>
      <input
        type="text"
        value={props.value}
        name={props.name}
        onChange={e => props.onChange(e.target.value, props.name, e)}
      />
    </>
  )
}
