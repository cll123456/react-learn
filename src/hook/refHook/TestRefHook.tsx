import React, { useEffect, useRef, useState } from 'react'

export default function TestRefHook() {
  // 计时器的数据
  const [n, setN] = useState(10)
  // 使用ref来固定数据
  const nRef = useRef(n)
  // 使用副作用
  useEffect(() => {
    const timer = setInterval(() => {
      nRef.current--
      setN(nRef.current)
      if (nRef.current === 0) {
        clearInterval(timer)
      };
    }, 1000)
  }, []) // 这里不能写任何的依赖，不然会没用
  return (
    <div>
      <span>计时器</span>
      <span>{n}</span>
    </div>
  )
}

// export default function TestRefHook() {
//   // 计时器的数据
//   const [n, setN] = useState(10)
//   // 使用副作用
//   useEffect(() => {
//     if (n === 0) return;
//     const timer = setInterval(() => {
//       setN(n - 1)
//     }, 1000)
//     return () => {
//       clearInterval(timer)
//     }
//   }, [n])
//   return (
//     <div>
//       <span>计时器</span>
//       <span>{n}</span>
//     </div>
//   )
// }


// export default function TestRefHook() {
//   // 计时器的数据
//   const [n, setN] = useState(10)
//   // 使用副作用
//   useEffect(() => {
//     if (n === 0) return;
//     // 这里为啥要使用setTimeout,因为effect hooks 在初始化的时候会调用函数，
//     // 启动一个定时器，并且在先清理上一次的副作用
//     const timer = setTimeout(() => {
//       setN(n - 1)
//     }, 1000)
//     return () => {
//       clearTimeout(timer)
//     }
//   }, [n])
//   return (
//     <div>
//       <span>计时器</span>
//       <span>{n}</span>
//     </div>
//   )
// }
