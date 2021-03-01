import React, { Component } from 'react'

interface IAP {
  msg: string,
}

function A (props: IAP, ref: React.Ref<HTMLHeadingElement >){
  console.log(ref,'----');
  
  return (
    <h1 ref={ref}>{props.msg}</h1>
  )
}

const NewA = React.forwardRef(A);

export default class TestFuncForwardRef extends Component {
  private getRef  = React.createRef<HTMLHeadingElement>();

  componentDidMount() {
    console.log(this.getRef);
    
  }
  

  render() {
    return (
      <div>
       <NewA msg="我是组件A" ref={this.getRef}></NewA>
      </div>
    )
  }
}
