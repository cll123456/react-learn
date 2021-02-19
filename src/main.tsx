import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Page from './pro/compEvent/demo/page'
// import TestEvent from './pro/compEvent/TestEvent'
// import BallSport from './pro/compState/demo/BallSport'



ReactDOM.render(
  <div>
    <Page panelNum={5} pageSize={10} currentPage={1} total={100} />
  </div>,
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