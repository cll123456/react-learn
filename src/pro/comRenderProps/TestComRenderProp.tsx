
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
 * 处理用户逻辑的组件
 */
class DealUserLogicComp extends PureComponent<IProp, ICompRenderPropS> {
  // 假设数据我已经获取到了
  state = {
    username: 'aaaa',
    email: '123@abc.com',
    address: '北京市xxxx'
  }

  handleSave = () => {
    // 发送请求
    // 保存数据
    alert('保存了数据哦')
  }
  render() {
    return (
      <div>
        {this.props.render(this.state)}
        <button onClick={this.handleSave}>保存</button>
      </div>
    )
  }
}


class UpdateUser extends PureComponent {
  // 不在里面直接使用函数的原因是，每一次调用组件的函数都是一个新的函数，比较浪费资源
  handleUpdateUser = (data: ICompRenderPropS) => (
    <div className='update-user'>
      <h1>修改用户信息</h1>
      <label > 用户名：<input type="text" defaultValue={data.username} /> </label>
      <label > 邮箱： <input type="text" defaultValue={data.email} /> </label>
      <label > 地址：<input type="text" defaultValue={data.address} /> </label>
    </div>
  )
  render() {
    return (
      <DealUserLogicComp render={this.handleUpdateUser} />

    )
  }
}


class RegisterUser extends PureComponent {
  // 不在里面直接使用函数的原因是，每一次调用组件的函数都是一个新的函数，比较浪费资源
  handleRegisterUser = (data: ICompRenderPropS) => (
    <div className='update-user'>
      <h1>注册用户</h1>
      <div > 用户名：<input type="text" defaultValue={data.username} /> </div>
      <div > 邮箱： <input type="text" defaultValue={data.email} /> </div>
      <div > 地址：<input type="text" defaultValue={data.address} /> </div>
    </div>
  )
  render() {
    return (
      <DealUserLogicComp render={this.handleRegisterUser} />
    )
  }
}



export default class TestComRenderProp extends PureComponent {
  render() {
    return (
      <div>
        <UpdateUser />
        <RegisterUser />
      </div>
    )
  }
}
