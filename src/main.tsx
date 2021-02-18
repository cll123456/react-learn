import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import  './pro/carousel/index'
// import  './pro/compProp/demo/index'
// import TestState from './pro/compState/TestState'
import BallSport from './pro/compState/demo/BallSport'
 



ReactDOM.render(
  <>
  <BallSport width={100} height={100} xSpeed={50} ySpeed={60} top={10} left={10}/>
  <BallSport width={100} height={100} xSpeed={10} ySpeed={100} top={100} left={100}/>
  <BallSport width={100} height={100} xSpeed={130} ySpeed={50} top={30} left={200}/>
  </>,
  document.getElementById('root')
)



// ReactDOM.render(
//   <React.StrictMode>
//   </React.StrictMode>,
//   document.getElementById('root')
// )
// const obj = '<span>span1</span><span>span2</span>'
// const h1Dom: JSX.Element = (
//   <>
//   <p>{ obj }</p>
//   </>
// );
// h1Dom.props.children = '1232'  