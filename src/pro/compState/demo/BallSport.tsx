import React, { Component } from 'react'
import { IBallSportP, IBallSportS } from './types'
import './ball.css'
import { random } from './utils'



export default class BallSport extends Component<IBallSportP, IBallSportS> {
  state = {
    xSpeed: this.props.xSpeed,
    ySpeed: this.props.ySpeed,
    top: this.props.top,
    left: this.props.left,
    background: `radial-gradient(rgba(${random(0, 255)},${random(0, 255)},${random(0, 255)}), transparent)`,
  }

  constructor(props: IBallSportP) {
    super(props);
    // 小球移动
    this.move();
  }
  /**
   * 小球移动
   */
  move = () => {
    const duration = 16;
    const xDis = this.state.left + (this.state.xSpeed * duration) / 1000;
    const yDis = this.state.top + (this.state.ySpeed * duration) / 1000;
    // 碰撞判断
    const res = this.crashBoundary(xDis, yDis);
    this.setState({
      top: res.yDis,
      left: res.xDis,
    })
    window.requestAnimationFrame(this.move)
  }
  /**
   * 边界碰撞
   */
  crashBoundary = (xDis: number, yDis: number) => {
    // // 超出横向边界
    if (xDis >= document.documentElement.clientWidth - this.props.width) {
      xDis = document.documentElement.clientWidth - this.props.width;
      // 改变横向的方向
      this.setState({
        xSpeed: -this.state.xSpeed,
        background: `radial-gradient(rgba(${random(0, 255)},${random(0, 255)},${random(0, 255)}), transparent)`,
      })
    } else if (xDis <= 0) {
      xDis = 0;
      // 改变横向的方向
      this.setState({
        xSpeed: -this.state.xSpeed,
        background: `radial-gradient(rgba(${random(0, 255)},${random(0, 255)},${random(0, 255)}), transparent)`,
      })
    }
    if (yDis >= document.documentElement.clientHeight - this.props.height) {
      yDis = document.documentElement.clientHeight - this.props.height;
      // 改变纵向的方向
      this.setState({
        ySpeed: -this.state.ySpeed,
        background: `radial-gradient(rgba(${random(0, 255)},${random(0, 255)},${random(0, 255)}), transparent)`,
      })
    } else if (yDis <= 0) {
      yDis = 0;
      // 改变纵向向的方向
      this.setState({
        ySpeed: -this.state.ySpeed,
        background: `radial-gradient(rgba(${random(0, 255)},${random(0, 255)},${random(0, 255)}), transparent)`,
      })
    }
    return {
      xDis,
      yDis
    }
  }

  crashBall = (xDis: number, yDis: number) => {

  }
  render() {
    return (
      <>
        <div className='ball'
          style={
            {
              top: this.state.top + 'px',
              left: this.state.left + 'px',
              width: this.props.width + 'px',
              height: this.props.height + 'px',
              background: this.state.background
            }
          }></div>
      </>
    )
  }
}
