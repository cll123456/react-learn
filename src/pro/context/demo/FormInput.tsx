import React, { Component } from 'react'
import {Consumer} from './formContext'

interface IFormInputProps {
  type?: string,
  name: string,
}
export default class FormInput extends Component<IFormInputProps> {

  static defaultProps = {
    type: 'text'
  }

  render() {
    return (
      <Consumer>
        {(value) => (
            <input 
            name={this.props.name}  
            type={this.props.type} 
            value={value.formData[this.props.name] || ''}
            onChange={ e => {
              value.changeFormDate(e.target.value, this.props.name);
            }} 
            />
        )}
      </Consumer>
    )
  }
}
