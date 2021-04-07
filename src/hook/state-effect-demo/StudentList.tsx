import React from 'react'

/**
 * 属性列表
 */
export interface IStuProp {
  name: string,
  sex: string,
}

export default function StudentList(props: IStuProp) {
  return (
    <li>
      姓名: {props.name}, 性别： {props.sex}
    </li>
  )
}
