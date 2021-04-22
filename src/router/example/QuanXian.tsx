import React, { useCallback } from 'react'
import { BrowserRouter as Router, Link, NavLink, Redirect, Route, RouteComponentProps, RouteProps, Switch, useHistory, useLocation, useRouteMatch } from 'react-router-dom'
import qs from 'query-string'
const loginInfo = {
  isLogin: false,
  login() {
    this.isLogin = true
  },
  loginOut() {
    this.isLogin = false;
  }
}

export default function QuanXian() {
  return (
    <Router>
      <ul>
        <NavLink exact to='/PublicPage' activeStyle={{ color: '#f40' }} style={{ marginRight: '20px' }}>公共页面</NavLink>
        <NavLink exact to='/Login' activeStyle={{ color: '#f40' }} style={{ marginRight: '20px' }}>登录页面</NavLink>
        <NavLink exact to='/' activeStyle={{ color: '#f40' }}>受保护的页面</NavLink>
      </ul>

      <Switch>
        <Route exact path='/PublicPage' component={PublicPage} />
        <Route exact path='/Login' component={Login} />
        <ProtectRoute path='/' component={ProtectedPage} />
      </Switch>
    </Router>
  )
}


function Login() {
 const history =  useHistory()
  return (
    <div>
      <h1>这是登录页面</h1>
      <button onClick={() => {
        loginInfo.login();
        // 判断前往哪个页面
        const query:{redirectPath: string} = qs.parse(history.location.search) as {redirectPath: string};
        if (query.redirectPath) {
          history.push(query.redirectPath)
        }else{
          history.push('/PublicPage')
        }
      }}>登录</button>
      <button onClick={() => {
        loginInfo.loginOut()
      }}>退出登录</button>
    </div>
  )
}

function PublicPage() {
  return (
    <div>
      <h1>这是公共页面，不需要登录就能访问</h1>
    </div>
  )
}

function ProtectedPage() {
  return (
    <div>
      <h1>这是需要登录才能看到的页面</h1>
    </div>
  )
}


function ProtectRoute({ component: Comp, children: Child, ...rests }: RouteProps) {
  
  const loginHandle = useCallback(
    (routeProps: RouteComponentProps) => {
      console.log(routeProps,loginInfo.isLogin);
      // 判断是否登录
      if (loginInfo.isLogin) {
        if (Comp) {
          return <Comp {...rests} {...routeProps} />
        } else if (Child) {
          return Child
        }
        else {
          return <></>
        }
      }else{
        // 没有登录自动千万登录页面
        return <Redirect to={`/Login?redirectPath=${routeProps.match.path}`}></Redirect>
      }
     
    },
    [],
  )


  return (
    <>
      <Route
        {...rests}
        render={loginHandle}
      >
      </Route>
    </>
  )
}