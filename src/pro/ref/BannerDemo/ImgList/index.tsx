import React, { Component } from 'react'
import './index.css'
import { IImgListP } from './type'

export default class ImgList extends Component<IImgListP> {
  static defaultProps: IImgListP = {
    width: 520,
    height: 280,
    imgList: []
  }

  /**
   * 获取图片的dom
   */
  private getImgDom = React.createRef<HTMLDivElement>();

  /**
    * 对外提供一个切换到第几张图片的方法
    * @param index  {Number} 图片的下标
    */
  changeToIndex = (index: number) => {
    this.getImgDom.current!.style.left = this.props.width * (- index) + 'px';
  }
/**
 * 通过margin来改变
 * @param dis 
 */
  changeByStyle = (dis: number) => {
    this.getImgDom.current!.style.marginLeft = -dis + 'px';
  }

  render() {
    /**
     * 轮播图片的列表
     */
    const imgListRectDom: JSX.Element[] = this.props.imgList.map(p => {
      return (
        <img
          src={p.url}
          key={p.id}
          alt='轮播图片'
          style={
            {
              width: this.props.width,
              height: this.props.height
            }
          }
        />
      )
    })

    return (
      <div
        className='img-list'
        ref={this.getImgDom}
        style={
          {
            height: this.props.height,
            width: this.props.width * this.props.imgList.length
          }
        }>
        { this.props.imgList.length > 0 ? imgListRectDom : null}
      </div>
    )
  }
}
