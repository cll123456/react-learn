import React, { useState } from 'react'
import { Transition } from 'react-transition-group';
// 接口
interface ITransitionStyles {
  entering: { opacity: number },
  entered: { opacity: number },
  exiting: { opacity: number },
  exited: { opacity: number },
  [key: string]: any
}

const duration = 3000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles: ITransitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export default function TestBaseTransition() {
  const [inProp, setInProp] = useState(true);
  return (
    <div>
      <Transition in={inProp} timeout={duration} >
        {state => {
          console.log(state,'--=====');
          
          return  (
            <div style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}>
              I'm a fade Transition!
            </div>
          )
        }}
      </Transition>
      <button onClick={() => setInProp(!inProp)}>
        Click to Enter
      </button>
    </div>
  );
}
