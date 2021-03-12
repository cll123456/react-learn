import React from 'react'
import { Consumer } from './formContext'

interface IFromButton {
  title: string
}
export default function FormButton(props: IFromButton) {
  return (
    <Consumer>
      {val => (
        <button onClick={() => val.getData()}>{props.title}</button>
      )}
    </Consumer>
  )
}
