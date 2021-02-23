import React from 'react';
import './index.css'
/**
 * 三栏布局属性接口
 */
interface IThreeLayoutP {
  /**
   * 子标签
   */
  children?: JSX.Element,
  /**
   * 坐标标签
   */
  left?: JSX.Element,
  /**
   * 右边标签
   */
  right?: JSX.Element,
  /**
   * 最小宽度
   */
  minWidth?: number,
  /**
   * 左边固定宽度
   */
  leftWidth?: number,
  /**
   * 右边固定宽度
   */
  rightWidth?: number
}

export default function ThreeLayout(props: IThreeLayoutP) {
  let defaultProps = {
    minWidth: 800,
    leftWidth: 200,
    rightWidth: 200,
  }
  defaultProps = Object.assign({}, defaultProps, props);
  return (
    <div className='threeLayout-container' style={{ minWidth: defaultProps.minWidth }}>
      <div className='main'>
        {props.children}
      </div>
      <div className='left' style={{ width: defaultProps.leftWidth }}>
        {props.left}</div>
      <div className='right' style={{ width: defaultProps.rightWidth }}>
        {props.right}
      </div>
    </div>
  )
}
