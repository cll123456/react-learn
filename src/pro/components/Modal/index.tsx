import React from 'react';
import './index.css'
interface IModalP {
  /**
   * 背景颜色
   */
  bg: string,
  /**
   * 子标签
   */
  children: JSX.Element
}

export default function Modal(props: IModalP) {
  return (
    <>
      <div className='modal' style={{ background: props.bg }}>
        <div className='modal-children'>
          {props.children}
        </div>
      </div>
    </>
  )
}
