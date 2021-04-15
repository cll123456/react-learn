import React, { useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import 'animate.css'
interface ITaskObj {
  id: string,
  name: string
}

export default function TestTransitionGroup() {
  const [taskList, setTaskList] = useState<ITaskObj[]>([
    { id: '1', name: '任务1' },
    { id: '2', name: '任务2' }
  ])
  return (
    <div>
      <TransitionGroup component={null}>
        {taskList.map(it => (
          <CSSTransition
            timeout={1000}
            key={it.id}
            appear
            classNames={{
              enterActive: 'animate__fadeInUp',
              exitActive: 'animate__fadeOutDown',
              appearActive: 'animate__shakeX'
            }}
          >
            <li className="animate__animated">{it.name}
              <button onClick={() => {
                setTaskList(taskList.filter(i => i.id !== it.id));
              }}>删除</button></li>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <button onClick={
        () => {
          const names = window.prompt();
          setTaskList([...taskList, { id: random(), name: (names as string) }])
        }
      }>添加一个任务</button>
    </div>
  )
}


function random() {
  return Math.random().toString(16).substr(2, 9) + Date.now()
}
