import React, { useCallback, useMemo, useState } from 'react'

interface IListTempCompP {
  // 值
  value: string,
}

function ListTempComp(prop: IListTempCompP) {
  console.log('ListTempComp 组件渲染了');
  return (
    <>
      <li>列表值：{prop.value}</li>
    </>
  )
}

export default function TestMemoHook() {
  // 手动来创建一个大数据
  const [range, setRange] = useState({ min: 0, max: 10000 });
  // const lis = [];
  // // 把数据放入数据
  // for (let index = range.min; index < range.max; index++) {
  //   lis.push(
  //     <ListTempComp key={index} value={index.toString()} />
  //   )
  // }
   const lis =useMemo(() => {
    const lis = [];
    // 把数据放入数据
    for (let index = range.min; index < range.max; index++) {
      lis.push(
        <ListTempComp key={index} value={index.toString()} />
      )
    }
    return lis;
  }, [range])

  // 其他数据
  const [inputVal, setInputVal] = useState(0)
  // 定义change事件，养成习惯，防止其他的组件调用当前组件，导致重复渲染
  const inputHandle = useCallback(
    () => {
      setInputVal(inputVal + 1)
    },
    [inputVal],
  )
  return (
    <div>
      <input type="number" value={inputVal} onChange={ inputHandle } />
      <ul>
        {lis}
      </ul>
    </div>
  )
}
