import React, { Component } from 'react'
import Dialog from './index'

/**
 * 弹框的状态
 */
interface IAppS {
  /**
   * 是否被打开
   */
  opened: boolean
}
export default class DialogTest extends Component<{}, IAppS> {
  state = {
    opened: false
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState(pre => ({
              opened: true
          }))
        }}>打开弹框</button>
        <Dialog opened={this.state.opened} close={() => {
           this.setState(pre => ({
            opened: false
        }))
        }} >
          我是弹框
        </Dialog>
      </div>
    )
  }
}
