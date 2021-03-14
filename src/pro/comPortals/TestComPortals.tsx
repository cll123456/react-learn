import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'


function CompB() {
  return (
    <div>
      我是子组件B
    </div>
  )
}

function CompA() {
  return ReactDOM.createPortal(
    (<div>
      我是子组件A
      <CompB></CompB>
    </div>),
    document.querySelector('#modal') as Element
  )
}


export default class TestComPortals extends PureComponent {
  render() {
    return (
      <div onClick={(e) => {
        console.log(e,'点击我子节点的任意地方，都可以打印这句话');
        
      }}>
        我是挂载在跟组件的
        <CompA></CompA>
      </div>
    )
  }
}
