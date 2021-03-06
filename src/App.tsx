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
import TestNewContext from './pro/context/TestNewContext'
import Form from './pro/context/demo/Form'
import TestPureComponent from './pro/compPureComponent/TestPureComponent'
import TestComRenderProp from './pro/comRenderProps/TestComRenderProp'
import TestComRenderPropHOC from './pro/comRenderProps/TestComRenderPropHOC'
import TestComPortals from './pro/comPortals/TestComPortals'

export default class App extends Component {
  render() {
    console.log('APP render');
    
    return (
      <div>
        {/* <InputTest/>
        <RadioGroupTest/>
        <SelectTest/>
        <CheckboxGroupTest/> */}
        {/* <TestRef/> */}
        {/* <TestFuncForwardRef></TestFuncForwardRef> */}
        {/* <TestClassForwardRef></TestClassForwardRef> */}
        {/* <BannerDemo></BannerDemo> */}
        {/* <TestNewContext /> */}

        {/* <Form>
          <label>
            登录 <Form.input name="LoginId" type="text"></Form.input>
          </label>
          <label>
            密码 <Form.input name="password" type="password"></Form.input>
          </label>
          <Form.button title='提交'></Form.button>
        </Form> */}

        {/* <TestPureComponent/> */}
        {/* <TestComRenderProp/> */}
        {/* <TestComRenderPropHOC/> */}
        <TestComPortals/>
      </div>
    )
  }
}
