import React, { Component } from 'react'
import { IBannerContainerP, IBannerContainerS } from './type'
import './index.css'
import ImgList from '../ImgList'
import BannerBtn from '../BannerBtn'
import { ECBtnTip, TCTip } from '../types'
import BannerDot from '../BannerDot'

export default class BannerContainer extends Component<IBannerContainerP, IBannerContainerS> {
  /**
   * 给属性附上默认参数
   */
  static defaultProps: IBannerContainerP = {
    width: 520,
    height: 280,
    imgList: [],
    duration: 3500,
    finishTimer: 500,
  }
  /**
   * 初始化状态
   */
  state: IBannerContainerS = {
    curIndex: 0
  }
  // 图片切换的定时器
  private timer: number = 0;

  // 自动移动的定时器
  private autoTimer: number = 0;
  // 动画帧
  private tick: number = 16;
  /**
   * 获取img的react 对象
   */
  private getImgListObj = React.createRef<ImgList>();
  /**
   * 组件完成挂载后启动定时器
   */
  componentDidMount() {
    this.autoMove();
  }

  /**
   * 切换坐标
   * @param index 
   */
  setIndex = (index: number) => {
    index = index % this.props.imgList.length;
    // 判断index 的边界值
    if (index < 0) index = this.props.imgList.length - 1;
    if (index > this.props.imgList.length - 1) index = 0;

    // 调用子组件的切换方法
    // this.getImgListObj.current!.changeToIndex(index);
    this.computedDis(index);
    // 维护状态
    this.setState(pre => ({
      curIndex: index
    }))
  }
  /**
   * 实时计算距离
   * @param index 
   */
  computedDis = (index: number) => {
    // 当前位置
    let curDis = this.state.curIndex * this.props.width;
    // 目标位置
    const targetDis = index * this.props.width;
    // 需要移动的次数
    const needMoveTimes = Math.ceil(this.props.finishTimer / this.tick);
    // 需要移动的距离
    const needMoveDis = (index - this.state.curIndex) * this.props.width;
    // 每秒移动的距离
    const perDis = needMoveDis / needMoveTimes;
    // 当前的次数
    let count = 0;
    // 先清理定时器
    clearInterval(this.timer);
    // 启动一个定时器
    this.timer = setInterval(() => {
      count++;
      curDis += perDis;
      // 移动
      this.getImgListObj.current!.changeByStyle(curDis);
      if (count === needMoveTimes) {
        // 直接移动到目标位置
        this.getImgListObj.current!.changeByStyle(targetDis);
        // 清除定时器
        clearInterval(this.timer);
      }
    }, this.tick)

  }
  /**
   * 自动移动
   */
  autoMove = () => {
    this.pause()
    this.autoTimer = setInterval(() => {
      let cur = this.state.curIndex;
      this.setIndex((cur + 1) % this.props.imgList.length)
    }, this.props.duration)
  }
  /**
   * 清理定时器
   */
  pause = () => {
    clearInterval(this.autoTimer);
  }

  /**
   * 按钮左右切换
   * @param tip 
   */
  changeUPAndDown = (tip: TCTip) => {
    if (tip === ECBtnTip.up) {
      this.setIndex(this.state.curIndex - 1);
    } else if (tip === ECBtnTip.down) {
      this.setIndex(this.state.curIndex + 1);
    }
  }

  render() {
    return (
      <>
        <div
          className='banner-container'
          onMouseEnter={this.pause}
          onMouseLeave={this.autoMove}
          style={
            {
              width: this.props.width,
              height: this.props.height
            }
          }>
          {/* 图片列表组件 */}
          <ImgList
            ref={this.getImgListObj}
            width={this.props.width}
            height={this.props.height}
            imgList={this.props.imgList}
          />
          {/* 左右切换的按钮组件 */}
          <BannerBtn
            onClick={this.changeUPAndDown} />
          {/* 小点点 */}
          <BannerDot
            imgListLength={this.props.imgList.length}
            curIndex={this.state.curIndex}
            onClick={this.setIndex}
          />
        </div>
      </>
    )
  }
}
