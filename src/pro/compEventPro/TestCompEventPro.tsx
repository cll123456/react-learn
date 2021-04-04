import React, { MouseEvent, PureComponent } from 'react'

export default class TestCompEventPro extends PureComponent {
  handleBtnClick = () => {

  }
  render() {
    return (
      <div>
        <button onClick={(e:MouseEvent<HTMLButtonElement>) => {
          console.log('我是一个按钮被点击了');
          e.nativeEvent.stopPropagation();
          e.stopPropagation();
        }}>我是一个按钮</button>
      </div>
    )
  }
}

// (document.getElementById('root') as HTMLDivElement).onclick = function (e: Event) {
//   // e.stopImmediatePropagation();
//   e.stopPropagation();
//   console.log('我来阻止冒泡');

// }

