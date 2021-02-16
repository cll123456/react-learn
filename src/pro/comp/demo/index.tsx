import React from 'react';
import ReactDOM from 'react-dom';
import ListCmp from './ListCmp'
/**
 * 获取数据
 */
async function  getData(){
  const list = await fetch('./src/pro/comp/assets/list.json').then(res => res.json());
  return list;
}

/**
 * 渲染
 */
async function render() {
  let data = await getData();
  ReactDOM.render(
    <>
    <ListCmp list = {data}/>
    </>
    ,
    document.getElementById('root')
  )
}

render();