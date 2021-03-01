import React, { Component } from 'react'
import { ECBtnTip } from '../types'
import './index.css'
import { IBannerBtnP } from './types'

export default class BannerBtn extends Component<IBannerBtnP> {
  render() {
    return (
      <div className='btn'>
        <span className='left' onClick={() => {
          this.props.onClick(ECBtnTip.up)
        }}>&lt;</span>
        <span className='right' onClick={() => {
          this.props.onClick(ECBtnTip.down)
        }}>&gt;</span>
      </div>
    )
  }
}
