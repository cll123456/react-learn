import React, { Ref, useEffect, useLayoutEffect, useRef, useState } from 'react'

export default function TestLayoutEffectHook() {
  // 页面显示数据
  const [n, setN] = useState(0)
// 获取dom
  const pRef:Ref<HTMLParagraphElement> = useRef(null);
  // 操作dom 来改变
  useLayoutEffect(() => {
    pRef.current!.innerText = '从0变化到123'
  }, [n])

  return (
    <div>
      组件显示的值
      <p ref={pRef}> {n} </p>
    </div>
  )
}
