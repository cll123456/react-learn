import React, { ComponentClass, PureComponent } from 'react'
// 捕捉错误的状态
interface IGetErrorCompS {
  // 是否有错误
  hasError: boolean,

}
interface IProp {
  // 传入的组件
  children: JSX.Element
}
/**
 * 捕捉错误的组件
 */
class GetErrorComp extends PureComponent<IProp, IGetErrorCompS> {
  state = {
    hasError: false
  }
  // /**
  //  * 该方法的执行时间是在子组件发生错误后，更新页面前触发的，返回一个对象来更新状态
  //  * @returns 
  //  */
  // static getDerivedStateFromError() {
  //   console.log('我是组件GetErrorComp组件，来捕捉我子组件的错误');
  //   return {
  //     hasError: true
  //   }
  // }
  /**
   * 我执行是在页面更新后触发的，与上面的方法getDerivedStateFromError 刚好相反
   */
  componentDidCatch(){
    console.log('我是组件GetErrorComp组件，componentDidCatch方法，来捕捉我子组件的错误');
    this.setState({
      hasError: true
    })
  }
  render() {
    return (
      <>
        {this.state.hasError ? '我捕捉到子组件的错误' : this.props.children}
      </>
    )
  }
}


/**
 * 组件A
 */
class CompA extends PureComponent {

  render() {
    return (
      <>
        <h1>我是组件CompA</h1>
        <GetErrorComp>
          <CompB />
        </GetErrorComp>
      </>
    )
  }
}

/**
 * 组件B
 */
class CompB extends PureComponent {
  render() {
    throw Error('我是CompB组件，我要报错')
    return (
      <>
        <h1>我是组件CompB</h1>
      </>
    )
  }
}

/**
 * 测试边界组件
 */
export default class TestCompErrorBoundary extends PureComponent {
  render() {
    return (
      <div>
        <h1>我是跟组件</h1>
        <CompA />
      </div>
    )
  }
}
