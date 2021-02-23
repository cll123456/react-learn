import React, { Component } from 'react'
import PageTest from './pro/compEvent/PageTest'
import BallTest from './pro/compState/BallTest'
import CheckboxGroupTest from './pro/form/CheckboxGroup/CheckboxGroupTest'
import InputTest from './pro/form/Input/InputTest'
import RadioGroupTest from './pro/form/RadioGroup/RadioGroupTest'
import SelectTest from './pro/form/Select/SelectTest'



export default class App extends Component {
 
  render() {
    
    return (
      <div>
        <InputTest/>
        <RadioGroupTest/>
        <SelectTest/>
        <CheckboxGroupTest/>
        </div>
    )
  }
}
