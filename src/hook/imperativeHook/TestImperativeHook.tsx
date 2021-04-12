import React, { Ref, useCallback, useImperativeHandle } from 'react'
// 定义接口类型
interface IR {
  testHandle: () => void
}

function TestGetFuncHandle(props: {}, ref: Ref<IR>) {
  useImperativeHandle(ref, () => ({
    // 需要把函数组件对外暴露的的事件写到这里
    testHandle: handle
  }));

  const handle = () => {
    console.log('函数组件的事件调用了');
  }
  return (
    <>
      <div >函数组件</div>
      <button onClick={ handle}>组件自己调用</button>
    </>
  )
}

const NewTestFor = React.forwardRef(TestGetFuncHandle);

export default function TestImperativeHook() {
  const funcRef: Ref<IR> = React.createRef()
  // 获取子组件的事件
  const handle = useCallback(() => {
    funcRef.current!.testHandle()
  }, [])
  return (
    <div>
      <NewTestFor ref={funcRef}></NewTestFor>
      <button onClick={handle}>获取子组件事件</button>
    </div>
  )
}

// class TestGetClassHandle extends PureComponent {
//   // 测试的事件
//   testHandle = () => {
//     console.log('获取类组件中的事件');
//   }
//   render() {
//     return (
//       <div>
//         <h1>类组件</h1>
//       </div>
//     )
//   }
// }