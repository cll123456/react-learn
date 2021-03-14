
import React, { PureComponent, ReactNode } from 'react'

// 用户组件的属性
interface ICompRenderPropS {
  username: string, // 用户名
  email: string, // 邮箱
  address: string,  // 地址
}
// 定义接口
interface IProp {
  render: (data: ICompRenderPropS) => ReactNode;
}
/**
 * 高阶组件
 * @param Comp 
 */
function WidthDealUserLogicHoc(Comp: React.ComponentClass<ICompRenderPropS>) {
  return class DealUserLogicComp extends PureComponent<{}, ICompRenderPropS>{
    // 假设数据我已经获取到了
    state = {
      username: 'aaaa',
      email: '123@abc.com',
      address: '北京市xxxx'
    }
    /**
     * 保存数据的方法
     */
    handleSave = () => {
      // 发送请求
      // 保存数据
      alert('保存了数据哦')
    }

    render() {
      return (
        <>
          <Comp {...this.state} />
          <button onClick={this.handleSave}>保存</button>
        </>
      )
    }
  }
}

// 修改用户的数据
class UpdateUser extends PureComponent<ICompRenderPropS> {
  render() {
    return (
      <>
        <div className='update-user'>
          <h1>修改用户信息</h1>
          <label > 用户名：<input type="text" defaultValue={this.props.username} /> </label>
          <label > 邮箱： <input type="text" defaultValue={this.props.email} /> </label>
          <label > 地址：<input type="text" defaultValue={this.props.address} /> </label>
        </div>
      </>
    )
  }
}

// 注册用户的组件
class RegisterUser extends PureComponent<ICompRenderPropS> {
  render() {
    return (
      <>
        <div className='update-user'>
          <h1>注册用户</h1>
          <div > 用户名：<input type="text" defaultValue={this.props.username} /> </div>
          <div > 邮箱： <input type="text" defaultValue={this.props.email} /> </div>
          <div > 地址：<input type="text" defaultValue={this.props.address} /> </div>
        </div>
      </>
    )
  }
}

// 使用方式 
const WithUpdateUser = WidthDealUserLogicHoc(UpdateUser);
const WithRegisterUser = WidthDealUserLogicHoc(RegisterUser);
export default class TestComRenderPropHOC extends PureComponent {
  render() {
    return (
      <div>
        <WithUpdateUser />
        <WithRegisterUser />
      </div>
    )
  }
}
