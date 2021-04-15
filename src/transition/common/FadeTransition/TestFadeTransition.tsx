import React, { useCallback, useState } from 'react'
import { SwitchTransition, TransitionGroup } from 'react-transition-group'
import FadeTransition from '.'

// export default function <TestFadeTransition>() {
//   const [show, setShow] = useState(false)
//   const showHandle = useCallback(() => {
//     setShow(!show)
//   }, [show])
//   return (
//     <div>
//       <SwitchTransition>
//         <FadeTransition key={show ? '显示' : '隐藏'} timeout={5000}>
//           <h1>{show ? '显示' : '隐藏'}</h1>
//         </FadeTransition>
//       </SwitchTransition>
//       <button onClick={showHandle}>隐藏/显示</button>
//     </div>
//   )
// }


// export default function <TestFadeTransition>() {
//   const [show, setShow] = useState(true)

//   const showHandle = useCallback(() => {
//     setShow(!show)
//   }, [show])
//   return (
//     <>
//       <FadeTransition in={show} appear timeout={500}>
//         <h1>显示</h1>
//       </FadeTransition>
//       <button onClick={showHandle}>隐藏/显示</button>
//     </>
//   )
// }



interface ITaskObj {
  id: string,
  name: string
}
export default function <TestFadeTransition>() {
  const [taskList, setTaskList] = useState<ITaskObj[]>([
    { id: '1', name: '任务1' },
    { id: '2', name: '任务2' }
  ])
  return (
    <>
      <TransitionGroup>
        {taskList.map(it =>
        (
          <FadeTransition
            timeout={1000}
            key={it.id}
            appear
          >
            <li className="animate__animated">{it.name}
              <button onClick={() => {
                setTaskList(taskList.filter(i => i.id !== it.id));
              }}>删除</button></li>
          </FadeTransition>
        ))}
      </TransitionGroup>
      <button onClick={
        () => {
          const names = window.prompt();
          setTaskList([...taskList, { id: random(), name: (names as string) }])
        }
      }>添加一个任务</button>
    </>
  )
}

function random() {
  return Math.random().toString(16).substr(2, 9) + Date.now()
}