import React from 'react'
import { NavLink, BrowserRouter as Router, Route, RouteProps, withRouter, RouteComponentProps, Prompt } from 'react-router-dom'
import * as H from 'history';
export default function TestRouteGuard() {
  let count = 0
  return (
    <div>
      <Router
      getUserConfirmation={(msg, cb)=>{
        msg='223423sffs';
        cb(false)
      }}
      >
        <NavLink activeStyle={{ color: '#008c8c' }} to='/A' style={{ marginRight: '20PX' }}>页面A</NavLink>
        <NavLink activeStyle={{ color: '#008c8c' }} to='/B'>页面B</NavLink>
        <Route
          path='/A'
          exact
          component={A}
        >
        </Route>
        <Route path='/B' component={B}></Route>
      </Router>
    </div>
  )
}
function A() {
  return (
    <div>
      <h1>A page</h1>
    </div>
  )
}


function B() {
  return (
    <div>
      <h1>B page</h1>
    </div>
  )
}


/**
 * 路由守卫组件
 * 函数组件实现不了，每一次从新加载都是从新挂载新的组件，会添加多个监听函数的
 */
interface I_RouteGuardProps {
  onBeforeGuard?: (preLocation: H.Location, curLocation: H.Location, cancelListen: () => void, ac: H.Action) => void
}

class _RouteGuard extends React.PureComponent<RouteProps & RouteComponentProps & I_RouteGuardProps> {
  // 定义取消监听的函数
  private unlisten: () => void = () => null;

  private unblock: () => void = () => null;
  // 组件挂载的时候，进行守卫监听
  componentDidMount() {
      // 监听路由变化
      this.unlisten = this.props.history.listen((location: H.Location, action: H.Action) => {
        this.props.onBeforeGuard && this.props.onBeforeGuard(this.props.location, location, this.unlisten, action)
      })

    // if (!this.unblock) {
      // 注册阻止路由变化
      this.unblock = this.props.history.block((location: H.Location, action: H.Action) => {
        console.log(location, action);
      })
    // }

  }
  // 组件卸载 取消监听
  componentWillUnmount() {
    this.unlisten();
    this.unblock();
  }

  render() {
    return (
      <>
      {/* <Prompt message='werwrw'></Prompt> */}
        <Route {...this.props}></Route>
      </>
    )
  }
}
const RouteGuard = withRouter(_RouteGuard)

