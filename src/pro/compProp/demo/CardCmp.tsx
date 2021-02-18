import React from 'react'
import { ICardProps } from './type'


export default function CardCmp(props: ICardProps) {
  return (
    <div>
      <li>大家好，我叫{props.name},我是{props.sex === 1 ? '男' : '女'}生，我的邮箱是{props.email}</li>
    </div>
  )
}
