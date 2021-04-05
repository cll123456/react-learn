import React, { useEffect, useState } from 'react'

export default function TestEffectHook() {
  // 计数器
  const [count, setCount] = useState(0);

  // 改变网页的title
  useEffect(() => {
    console.log('effect副作用函数执行');
    document.title = `title ${count}`
    setTimeout(() => {
      console.log(count);
      
    },1000);
    return () => {
      console.log('cleanup 函数执行了');
    }
  },[count]);
  return (
    <div>
        <div>
          <p>{count}</p>
          <button onClick={() => {
            setCount(pre => pre + 1)
          }}> + 1 </button>
        </div>
    </div>
  )
}
