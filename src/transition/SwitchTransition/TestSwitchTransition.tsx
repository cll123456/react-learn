import React, { useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import './index.scss'
import 'animate.css'
export default function TestSwitchTransition() {
  // 是否显示
  const [show, setShow] = useState(false)
  return (
    <div className='container'>
      <SwitchTransition>
        <CSSTransition
          timeout={1000}
          appear
          key={show ? 1 : 2}
          mountOnEnter
          classNames={{
            appearActive: 'animate__rotateInDownLeft',
            enterActive: 'animate__rotateInDownLeft',
            exitActive: 'animate__rotateOutDownLeft',
            exitDone: 'exit-done'
          }}
        >
          <h1 className="animate__animated">{show ? '组件1' : '组件2'}</h1>
        </CSSTransition>
      </SwitchTransition>
      <button onClick={()=> {setShow(!show)}}>动画切换</button>
    </div>
  )
}
