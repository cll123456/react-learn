import React from 'react';
import ReactDOM from 'react-dom'
import img1 from './../../assets/imgs/carousels/1.jpg';
import img2 from './../../assets/imgs/carousels/2.jpg';
import img3 from './../../assets/imgs/carousels/3.jpg';
import './../../assets/css/carouselCss.css'

// 图片数组
const imgArr = [img1, img2, img3];
// 定时器
let timer: number | undefined = undefined;
// 图片索引
let imgIndex: number = 0;

/**
 * 渲染
 */
function render(){
  ReactDOM.render(
    <div className="carousel-container" onMouseEnter={ stop } onMouseMove={ start }>
      <img src={ imgArr[imgIndex] } alt="轮播图片" />
    </div>,
    document.getElementById('root')
  )
}
/**
 * 开始轮播
 */
function start() {
  stop();
  timer = setInterval(() => {
    imgIndex = (imgIndex + 1) % imgArr.length;
    render()
  }, 2000)
}
/**
 * 停止轮播
 */
function stop() {
  if(!timer) return;
  clearInterval(timer);
  timer = undefined;
}

start();

render();