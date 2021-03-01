import React, { Component } from 'react'
import BannerContainer from './BannerContainer'
import src1 from './../img/1.jpg';
import src2 from './../img/2.webp';
import src3 from './../img/3.jpg';
import src4 from './../img/4.jpg';
import src5 from './../img/5.webp';
import { ICImgObj } from './types';
export default class BannerDemo extends Component {
  render() {
    const imgList: ICImgObj[] = [
      { id: '1', url: src1 },
      { id: '2', url: src2 },
      { id: '3', url: src3 },
      { id: '4', url: src4 },
      { id: '5', url: src5 },
    ]

    return (
      <div>
        <BannerContainer imgList={imgList}></BannerContainer>
      </div>
    )
  }
}
