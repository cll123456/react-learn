import React, { Component } from 'react'
import { IPageP, IPageS } from './types'
import './page.css';
import { getMaxNumber, getMaxPage, getMinNumber } from './utils'

export default class Page extends Component<IPageP, IPageS> {
  state = {
    currentPage: this.props.currentPage
  }
  /**
   * 
   * @param n 前往第几页
   */
  goToPage = (n: number) => {
    const maxPage = getMaxPage(this.props.total, this.props.pageSize);
    if(n === this.state.currentPage || n <= 0 || n > maxPage) return;
    this.setState(pre => (
      {
        currentPage: n,
      }
    ))
  }
  render() {
    const maxPage = getMaxPage(this.props.total, this.props.pageSize);
    const min: number = getMinNumber(this.state.currentPage, this.props.panelNum);
    const max: number = getMaxNumber(min, maxPage, this.props.panelNum);
    let res: JSX.Element[] = [];
    for (let i = min; i <= max; i++) {
      res.push(
        <span
          className={this.state.currentPage === i ? 'item active' : 'item'}
          onClick={() => this.goToPage(i)}
          key={i}>{i}
        </span>
      )
    }
    return (
      <div className='page'>
        <span
          className={this.state.currentPage === 1 ? 'item disabled' : 'item'}
          onClick={() => this.goToPage(1)}> 首 页 </span>
        <span
          className={this.state.currentPage === 1 ? 'item disabled' : 'item'}
          onClick={() => this.goToPage(this.state.currentPage - 1)}> 上一页 </span>
        {/* 页码 */}
        {res}
        <span
          className={this.state.currentPage === maxPage ? 'item disabled' : 'item'}
          onClick={() => this.goToPage(this.state.currentPage + 1)}> 下一页 </span>
        <span
          className={this.state.currentPage === maxPage ? 'item disabled' : 'item'}
          onClick={() => this.goToPage(maxPage)}
        > 尾 页 </span>
        <span className="number">{this.state.currentPage} / {this.props.total}</span>
      </div>
    )
  }
}
