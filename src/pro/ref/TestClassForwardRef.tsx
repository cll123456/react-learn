import React, { Component } from 'react'
interface IAP {
  // 其他参数
  msg: string,
  // ref转发获取A组件的想要的dom
  forwardRef: React.Ref<HTMLHeadingElement>
}
// 我们知道类组件中，传递参数是从 props 里面来进行传参的，所以这里就通过属性来传递
class A extends Component<IAP> {
  render() {
    console.log(this.props,'------');
    
    return (
      <h1 ref={this.props.forwardRef}>{this.props.msg}</h1>
    )
  }
}
// 定义转发的参数类型
interface IForwardProp {
   // 其他参数
   msg: string,
}
//   React.forwardRef 里面填写一个函数，函数有两个参数，第一个是默认类组件的props, 第二个参数的ref 转发的对象，这里需要注意 ref 的类型
const NewA = React.forwardRef((props:IForwardProp , ref: React.Ref<HTMLHeadingElement>) => {
  return (<A {...props} forwardRef={ref} />)
})

export default class TestClassForwardRef extends Component {
  // 绑定需要使用的地方，注意类型需要一致
  private getRef = React.createRef<HTMLHeadingElement>();

  componentDidMount() {
    console.log(this.getRef);
  }
  
  render() {
    return (
      <div>
        // 使用方法
        <NewA msg='我是A类组件' ref={this.getRef}></NewA>
      </div>
    )
  }
}
