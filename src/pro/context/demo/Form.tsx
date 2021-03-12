import React, { Component } from 'react'
import FormButton from './FormButton';

import { Provider } from './formContext'
import FormInput from './FormInput'


export default class Form extends Component {
  static input = FormInput;
  static button = FormButton
  state = {
    formData: Object,
    getData: () => {
      console.log(this.state.formData);
      
    },
    changeFormDate: (val: string, name: string) => {
      this.setState({
        formData: {
          ...this.state.formData,
          [name]: val,
        }
      })
    },
    
  }
  render() {
    return (
      <Provider value={{ ...this.state }} >
        { this.props.children }
      </Provider>
    )
  }
}

