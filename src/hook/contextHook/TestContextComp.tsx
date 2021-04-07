import React from 'react'

interface ICtxP {
  name: string,
  age: number
}
// 创建一个上下文
const ctx = React.createContext<ICtxP>({name: 'twinkle', age: 18})
 // 文本组件
function TextComp(){
  return(
    <>
    <ctx.Consumer>
      {value => (
        <>
        <p>名字： {value.name}</p>
        <p>年龄: {value.age}</p>
        </>
      )}
    </ctx.Consumer>
    </>
  )
}

// 测试组件
export default function TestContextComp() {
  return (
    <div>
      <ctx.Provider value={{name: 'cll', age: 18}}>
        <TextComp/>
      </ctx.Provider>
    </div>
  )
}
