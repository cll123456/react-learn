import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import './index.scss'
import 'animate.css'
interface IMyAnimateP {
  show: boolean,
  children?: JSX.Element
}

function MyAnimate(p: IMyAnimateP) {
  return (
    <>
      <CSSTransition
        timeout={1000}
        in={p.show}
        mountOnEnter
        appear
        classNames={{
          enterActive: 'animate__backInRight',
          appearActive: 'animate__backInRight',
          exitActive: 'animate__backOutLeft',
          exitDone: 'exit-done'
        }}
      >
        {p.children}
      </CSSTransition>
    </>
  )
}

function Comp1() {
  return (
    <h1 className="animate__animated ">我是组件1</h1>
  )
}
function Comp2() {
  return (
    <h1 className="animate__animated">我是组件2</h1>
  )
}

export default function TestCSSTransition() {
  const [inProp, setInProp] = useState(false);
  return (

    <div className='container'>
      <>
        <MyAnimate show={inProp}>
          <Comp1 ></Comp1>
        </MyAnimate>
        <MyAnimate show={!inProp}>
          <Comp2 ></Comp2>
        </MyAnimate>
      </>
      <button type="button" onClick={() => setInProp(!inProp)}>
        Click to Enter
      </button>
    </div>

  );
}
