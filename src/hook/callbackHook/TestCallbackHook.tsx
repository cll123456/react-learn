import React, { PureComponent, useCallback, useState } from 'react'

interface ITestClassCompP {
  // 数字
  count: number,
  // 点击更改数据
  onClick: () => void
}
// 这是一个存组件，只有props 或者state 变化的时候才会render
class TestClassComp extends PureComponent<ITestClassCompP> {
  render() {
    console.log('TestClassComp 组件渲染了');
    return (
      <div>
        <h1>我是类组件，数据从函数组件穿过来，值是  {this.props.count}</h1>
        <button onClick={this.props.onClick}> + 1 </button>
      </div>
    )
  }
}

// 测试组件
export function TestCallbackHook() {
  // 状态值
  const [count, setCount] = useState(0)

  console.log('TestCallbackHook 组件渲染了');
  // 输入框的值
  const [inputVal, setInputVal] = useState(0)

  const handle = useCallback(
    () => {
      setCount(count + 1)
    },
    [count],
  )

  return (
    <>
      <TestClassComp
        count={count}
        onClick={handle} />
      <input
        value={inputVal}
        type="number"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputVal(parseInt(e.target.value))
        }} />
    </>
  )
}