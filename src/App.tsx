import React, { Component, ComponentType } from 'react'
import PageTest from './pro/compEvent/PageTest'
import BallTest from './pro/compState/BallTest'
import CheckboxGroupTest from './pro/form/CheckboxGroup/CheckboxGroupTest'
import InputTest from './pro/form/Input/InputTest'
import RadioGroupTest from './pro/form/RadioGroup/RadioGroupTest'
import SelectTest from './pro/form/Select/SelectTest'
import BannerDemo from './pro/ref/BannerDemo'
import TestClassForwardRef from './pro/ref/TestClassForwardRef'
import TestFuncForwardRef from './pro/ref/TestFuncForwardRef'
import TestRef from './pro/ref/TestRef'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <InputTest/>
        <RadioGroupTest/>
        <SelectTest/>
        <CheckboxGroupTest/> */}
        {/* <TestRef/> */}
        {/* <TestFuncForwardRef></TestFuncForwardRef> */}
        {/* <TestClassForwardRef></TestClassForwardRef> */}
        <BannerDemo></BannerDemo>
      </div>
    )
  }
}
