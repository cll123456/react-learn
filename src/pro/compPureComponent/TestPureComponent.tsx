import React, { Component, PureComponent } from 'react'

/**
 * 组件有两个状态，一个是li,另一个是添加li
 */
interface ITestPureComponentS {
  lis: number[],
  addLi: (li: number) => void
}

// 测试li 组件
class TestLi extends PureComponent {
 

  render() {
    console.log('TestLi render');
    return (
      <li>{this.props.children}</li>
    )
  }
}



export default class TestPureComponent extends Component<{}, ITestPureComponentS> {
  state = {
    lis: [],
    addLi: (li: number) => {
      this.setState({
        lis: [...this.state.lis, li]
      })
    }
  }


  // 组件即将渲染的时候，添加10个li
  componentDidMount() {
    let lis: number[] = []
    for (let i = 1; i <= 10; i++) {
      lis.push(i)
    }
    this.setState({
      lis: lis
    })
  }
  /**
   * 添加一个li
   */
  addLis = () => {
    const num = Date.now()
    this.state.addLi(num)
  }
  render() {
    console.log('TestPureComponent render');
    const lisD = this.state.lis.map(i => {
      return (
        <TestLi key={i}>{i}</TestLi>
      )
    })
    return (
      <div>
        {lisD}
        <button onClick={this.addLis}>添加一个li</button>
      </div>
    )
  }
}
