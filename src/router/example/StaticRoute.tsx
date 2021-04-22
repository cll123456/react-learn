import React from 'react'
import { BrowserRouter as Router, NavLink, Route, RouteComponentProps, Switch, useRouteMatch } from 'react-router-dom'
/**
 * 测试组件
 * @returns 
 */
export default function StaticRoute() {
  return (
    <div>
      <Router>
        <NavLink exact activeStyle={{ color: '#F40' }} to='/' style={{ marginRight: '20px' }}>首页</NavLink>
        <NavLink activeStyle={{ color: '#F40' }} to='/news'>新闻页</NavLink>
        {/* 类似 vue的route-view */}
        <RootRoute routeConfig={routeConfig} />
      </Router>
    </div>
  )
}

/**
 * 首页
 * @returns 
 */
function Index() {
  return <h1>首页</h1>
}

interface INew {
  children?: JSX.Element
}
/**
 * 新闻组件
 * @param prop 
 * @returns 
 */
function New(prop: INew) {
  const rm = useRouteMatch()
  return (
    <div>
      <div style={{ margin: '30px' }}> 新闻页</div>
      <NavLink exact activeStyle={{ color: '#F40' }} to={`${rm.path}/`} style={{ marginRight: '20px' }}>新闻首页</NavLink>
      <NavLink exact activeStyle={{ color: '#F40' }} to={`${rm.path}/content`} style={{ marginRight: '20px' }}>新闻内容</NavLink>
      <NavLink exact activeStyle={{ color: '#F40' }} to={`${rm.path}/other`} style={{ marginRight: '20px' }}>新闻其他页</NavLink>
     
     
      {/* 重新匹配子路由，这一行很关键，子组件是否能够匹配到路由 */}
      {prop.children}
    </div>
  )
}
/**
 * 新闻首页
 * @returns 
 */
function NewsIndex() {
  return <h2>新闻首页的详情士大夫十分</h2>
}
/**
 * 新闻内容
 * @returns 
 */
function NewsCont() {
  return <h2>新闻内容的详情孙菲菲</h2>
}
/**
 * 其他新闻
 * @returns 
 */
function NewsOther() {
  return <h2>新闻其他是的方法可你男看就</h2>
}

/**
 * 核心组件的声明
 */
interface IRootRouteProp {
  routeConfig: routeObj[],
  basePath?: string,
}
/**
 * 核心关键组件
 * @param param0 
 * @returns 
 */
function RootRoute({ routeConfig, basePath = '' }: IRootRouteProp) {
  if (routeConfig.length === 0) {
    return <></>
  }
  // 判断根路径不能为空
  const rt = routeConfig.map((it, index) => {
    const { component: Comp, children: Child, path, ...rest } = it;
    // 获取一个新的路径，并且把 // 替换成 /
    const newPath = (basePath + path).replace(/\/\./g, '/');
    // 是否需要使用exact 进行精确匹配
    const isExact = 'exact' in it ? it.exact : true
    // ... 这里还可以拓展其他的属性
    return (
      <Route
        key={newPath}
        {...rest}
        exact={isExact}
        path={newPath}
        render={(value) => {
          let crt: JSX.Element = <></>;
          if (Array.isArray(Child) && Child.length > 0) {
            crt = RootRoute({ routeConfig: Child, basePath: newPath })
          }
          return (
            <Comp {...value} >
              {/* 把子组件的route 放在children中， */}
              {crt}
            </Comp>
          )
        }}
      />
    )
  })
  return (
    <Switch>
      {rt}
    </Switch>
  )
}

/**
 * 路由对象声明
 */
interface routeObj {
  path: string;
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  exact: boolean;
  children?: routeObj[]
}

// 配置文件
const routeConfig: routeObj[] = [
  {
    path: '/news', component: New, exact: false,
    children: [
      { path: '/content', component: NewsCont, exact: true },
      { path: '/other', component: NewsOther, exact: true },
      { path: '/', component: NewsIndex, exact: true },
    ]
  },
  { path: '/', component: Index, exact: true },
]