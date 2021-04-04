import React, { useState } from 'react'

export default function TestStateHook() {
  const [data, setData] = useState(0);
  console.log('函数初始化')
  return (
    <div>
      <button onClick={() => {
        setData(s => {
          // 这样就可以获取之前的状态了
          console.log(s)
          return s + 1
        })
      }}> - 1 </button>
      <span> {data} </span>
      <button onClick={() => {
        setData(data + 1)
      }}> + 1 </button>
    </div>
  )
}
