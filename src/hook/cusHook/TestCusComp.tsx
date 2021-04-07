import React, { PureComponent } from 'react'
/**
 * 
 * @param comp 高阶组件的接口
 * @returns 
 */
interface IWithTimerReqS {
  // 当前次数
  count: number,
  // 获取的结果
  data: number[]
}
/**
 * 显示组件
 */
interface ITestCusCompS extends Partial<IWithTimerReqS> {
  // 是否展示组件
  hasShow: Boolean,
}

/**
 * 高阶组件
 */
function withTimerReq(Comp: React.ComponentClass<IWithTimerReqS>) {
  return class withTimerReqs extends PureComponent<{}, IWithTimerReqS> {
    state: IWithTimerReqS = {
      count: 0,
      data: [],
    }

    private timer: number | null = null;
    // 组件初始化的时候进行启动定时器
    componentDidMount() {
      this.setData();
    }
    // 数据更新进行操作
    componentDidUpdate(prevProps: {}, prevState: IWithTimerReqS) {
      this.setData();
    }

    private setData(){
      if(this.timer){
        clearInterval(this.timer);
        this.timer = null;
      }
      // 启动定时器
      this.timer =  setInterval(() => {
        // 计时器值 + 1
        this.setState(pre => {
          return {
            ...pre,
            count: pre.count + 1
          }
        });
        // 这里用一个立即执行函数来发送请求
        (async () => {
          const res = await getData(1, 10);
          console.log(this.state.data, res, '-=====');
          this.setState(pre =>{
            return {
              ...pre,
            data: [...pre.data, res]
            }
          });
        })()
      }, 1000)
    }
    // 组件卸载，清空定时器
    componentWillUnmount() {
      if(this.timer){
        clearInterval(this.timer);
        this.timer = null;
      }
    }


    render() {
      return (<>
        <Comp  {...this.state} />
      </>)
    }
  }
}
/**
 * 列表组件
 */
class ListComp extends PureComponent<IWithTimerReqS> {
 render(){
  const liDom = this.props.data.map((it, index) => (<li key={index}>{it}</li>));
   return (
    <>
    <p>次数： {this.props.count}</p>
    <p>数据</p>
    <ul>
      {liDom}
    </ul>
  </>
   )
 }
}
// 使用高阶组件包裹
const WithComp = withTimerReq(ListComp)

export default class TestCusComp extends PureComponent<{}, ITestCusCompS> {
  state: ITestCusCompS = {
    hasShow: true
  }
  render() {
    return (
      <div>
        <p><button onClick={() => { this.setState({ hasShow: !this.state.hasShow }) }}>隐藏/显示</button></p>
        {this.state.hasShow && <WithComp />}
      </div>
    )
  }
}

/**
 * 模拟发送请求，每一次返回一个随机数
 */
function getData(min: number, max: number): Promise<number> {
  return new Promise((resolve, reject) => {
    resolve(parseInt((Math.random() * (max - min)).toString(), 10) + min)
  })
}