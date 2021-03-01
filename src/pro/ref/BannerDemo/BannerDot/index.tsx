import React, { Component } from 'react'
import './index.css'
import { IBannerDotP } from './types'
export default class BannerDot extends Component<IBannerDotP> {
  render() {
    // 定义一个小点点的数组
    const spans:JSX.Element[] = [];
    for (let index = 0; index < this.props.imgListLength; index++) {
       spans.push(
         <span 
         className={this.props.curIndex === index ? 'active' : ''}
         onClick={() => {this.props.onClick(index)}}
         key={index}
         />
       )
    }
    return (
      <div className='dots'>
        {spans}
      </div>
    )
  }
}
