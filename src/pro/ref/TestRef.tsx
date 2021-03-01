import React, { Component } from 'react'
interface IProp<T> {
  msg: string,
  ref: React.RefObject<T>
}
// 定义A组件
class A extends Component<IProp<A>> {
  render(){
    return <h1>{this.props.msg}</h1>
  }
}

export default class TestRef extends Component {
  private getRef:React.RefObject<A> = React.createRef();

  // 组件挂载完成后打印this
  componentDidMount() {
    // 可以通过this.getRef.current  属性名来进行获取 实列对象
    console.log(this); 
  }

  render() {
    return (
      <div>
       <A msg={'2r3242344'} ref={this.getRef}></A>
      </div>
    )
  }
}
