import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'
import './index.scss'

export default function FadeTransition(prop: Partial<CSSTransitionProps>) {
  let styles = `opacity ${prop.timeout}ms`
  // 添加样式
  const addTranStyle = (node: HTMLElement) => {
    node.style.transition = styles;
  }
  // 移除样式
  const removeTranStyle = (node: HTMLElement) => {
    node.style.transition = '';
  }
  return (
    <>
      <CSSTransition {...prop}
        addEndListener={() => {
          if ('addEndListener' in prop) {
            prop.addEndListener
          }
        }}
        classNames='fade'
        onEnter={addTranStyle}
        onExit={addTranStyle}
        onEntered={(node: HTMLElement, isAppear: boolean) => {
          removeTranStyle(node);
          // 原有的事件继续执行
          prop.onEntered && prop.onEntered(node, isAppear)
        }}
        onExited={(node: HTMLElement) => {
          removeTranStyle(node);
          // 原有的事件继续执行
          prop.onExited && prop.onExited(node);
        }}
      >
        {prop.children}
      </CSSTransition>
    </>
  )
}

// 默认参数
FadeTransition.defaultProps = {
  timeout: 500,
  addEndListener: (node: HTMLElement, done: () => void) => {
    done();
  }
}