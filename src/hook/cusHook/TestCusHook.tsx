import React, { useEffect, useState } from 'react'
/**
 * 列表组件
 * @returns 
 */
function ListComp() {
  const { count, data } = useTimerReqHooks();
  const liDom = data.map((it, index) => (<li key={index}>{it}</li>));
  return (
    <>
      <p>次数： {count}</p>
      <p>数据</p>
      <ul>
        {liDom}
      </ul>
    </>
  )
}

/**
 * 测试组件
 * @returns 
 */
export default function TestCusHook() {
  const [hasShow, setHasShow] = useState(true);
  return (
    <div>
      <p><button onClick={() => { setHasShow(!hasShow) }}>隐藏/显示</button></p>
      {hasShow && <ListComp />}
    </div>
  )
}
/**
 * 自定义hook，做一个轮询后台的处理，每隔1s钟发一次请求（实际的请求不可能这么频繁）
 */
 function useTimerReqHooks() {
  // 计时器记录的数据
  const [count, setCount] = useState<number>(0);
  // 时间变化请求
  const [data, setData] = useState<number[]>([]);
  // 计数器
  let timer: number | null = null;
  // 副作用，发起请求
  useEffect(() => {
    timer = setInterval(() => {
      // 计时器值 + 1
      setCount(pre => pre + 1);
      // 这里用一个立即执行函数来发送请求
      (async () => {
        const res = await getData(1, 10);
        console.log(data, res, '-=====');

        setData(pre => [...pre, res]);
      })()
    }, 1000)
    return () => {
      // 清空定时器
      if (timer) {
        clearInterval(timer);
        timer = null;
      }

    }
  }, [count]);
  return {
    data,
    count
  }
}
/**
 * 模拟发送请求，每一次返回一个随机数
 */
function getData(min: number, max: number): Promise<number> {
  return new Promise((resolve, reject) => {
    resolve(parseInt((Math.random() * (max - min)).toString(), 10) + min)
  })
}
