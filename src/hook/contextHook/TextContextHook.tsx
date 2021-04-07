import React, { useContext } from 'react'
// 上下文数据的结构
interface ICtxP {
  name: string,
  age: number
}
// 创建一个上下文
const ctx = React.createContext<ICtxP>({ name: 'twinkle', age: 18 })
// 文本组件
function TextComp() {
  // 直接使用上下文hook
  const value = useContext(ctx);
  return (
    <>
      <p>名字： {value.name}</p>
      <p>年龄: {value.age}</p>
    </>
  )
}
export default function TextContextHook() {
  
  return (
    <div>
      <ctx.Provider value={{name: 'cll', age: 18}}>
      <TextComp/>
      </ctx.Provider>
    </div>
  )
}
