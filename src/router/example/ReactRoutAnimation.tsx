import React, { useEffect } from 'react'
import { BrowserRouter, NavLink, Route, RouteComponentProps, RouteProps, Switch, useHistory } from 'react-router-dom'
import { CSSTransition, SwitchTransition, TransitionGroup } from 'react-transition-group';
import 'animate.css'
export default function ReactRoutAnimation() {
  return (
    <div style={{ margin: '0 auto', width: '500px', textAlign: 'center', position: "relative" }}>
      <BrowserRouter>
        <NavLink activeStyle={{ color: '#008c8c' }} to='/A' style={{ marginRight: '20PX' }}>页面A</NavLink>
        <NavLink activeStyle={{ color: '#008c8c' }} to='/B' style={{ marginRight: '20PX' }}>页面B</NavLink>
        <NavLink activeStyle={{ color: '#008c8c' }} to='/C'>页面C</NavLink>
        <RouteAnimate path='/A' component={A}></RouteAnimate>
        <RouteAnimate path='/B' component={B}></RouteAnimate>
        <RouteAnimate path='/C' component={C}></RouteAnimate>
      </BrowserRouter>
    </div>
  )
}


function RouteAnimate(props: RouteProps) {
  let { component: Comp, children: Child, ...rest } = props;
  return (<Route {...rest}>
    {
      (values: RouteComponentProps) => {
        if (Comp) {
          return (
            // <SwitchTransition>
              <CSSTransition
                timeout={800}
                in={values.match ? true : false}
                classNames={{
                  enter: 'animate__animated animate__fadeInRight animate__fast',
                  exit: 'animate__animated animate__fadeOutLeft animate__fast'
                }}
                mountOnEnter={true}
                unmountOnExit={true}
              >
                <Comp {...values}></Comp>
              </CSSTransition>
            // </SwitchTransition>
          )
        }
        return (<></>)
      }
    }
  </Route>)
}

function A() {
  return (
    <div style={{ width: '500px', height: '400px', background: '#ffa986', position: 'absolute' }}>
      <h1>A page</h1>
    </div>
  )
}


function B() {
  return (
    <div style={{ width: '500px', height: '400px', background: '#abcdef', position: 'absolute' }}>
      <h1>B page</h1>
    </div>
  )
}

function C() {
  return (
    <div style={{ width: '500px', height: '400px', background: '#f40', position: 'absolute' }}>
      <h1>c page</h1>
    </div>
  )
}