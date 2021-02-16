import React from 'react'

interface MyFuncCompProps{
  // 测试数据
  num: number
}
export default function MyFuncComp(props:MyFuncCompProps) {
  return (
    <div>
      我是函数式组件,传递的数字{props.num}
    </div>
  )
}
