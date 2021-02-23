import React, { Component } from 'react'
import Modal from '../Modal'
import './index.css'
/**
 * 弹框的属性值
 */
interface IDialogP {
  /**
   * 弹框的宽度
   */
  width?: string,
  /**
   * 弹框的高度
   */
  height?: string,
  /**
   * 是否显示关闭按钮
   */
  closeIcon?: boolean,
  /**
   * 是否打开弹框
   */
  opened: boolean,
  /**
   * 关闭按钮
   */
  close: () => void,
}
export default class Dialog extends Component<IDialogP> {

  /**
   * 关闭弹框
   */
  closeDialog = () => {
    this.setState(pre => ({
      opened: false
    }))
  }
  render() {
    // 设置默认的属性值
    let defaultProps = {
      width: '50%',
      height: '50%',
      closeIcon: true,
    }
    defaultProps = Object.assign({}, defaultProps, this.props);
    // 是否显示关闭按钮
    const closeDom = defaultProps.closeIcon
      ? (<span className='dialog-close' onClick={this.props.close}> X </span>)
      : null;
    // 是否显示弹框
    const res = this.props.opened ?
      (<Modal bg='rgba(0,0,0,.4)'>
        <div className='dialog_container' style={{ height: defaultProps.height, width: defaultProps.width }}>
          {/* 关闭按钮 */}
          {closeDom}
          {/* 子元素 */}
          {this.props.children}
        </div>
      </Modal>)
      : null
      
    return (
      <>
        {res}
      </>
    )
  }
}
