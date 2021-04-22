import React, { Component, ComponentType, MouseEventHandler } from 'react'
import { TestCallbackHook } from './hook/callbackHook/TestCallbackHook';
// import PageTest from './pro/compEvent/PageTest'
// import BallTest from './pro/compState/BallTest'
// import CheckboxGroupTest from './pro/form/CheckboxGroup/CheckboxGroupTest'
// import InputTest from './pro/form/Input/InputTest'
// import RadioGroupTest from './pro/form/RadioGroup/RadioGroupTest'
// import SelectTest from './pro/form/Select/SelectTest'
// import BannerDemo from './pro/ref/BannerDemo'
// import TestClassForwardRef from './pro/ref/TestClassForwardRef'
// import TestFuncForwardRef from './pro/ref/TestFuncForwardRef'
// import TestRef from './pro/ref/TestRef'
// import TestNewContext from './pro/context/TestNewContext'
// import Form from './pro/context/demo/Form'
// import TestPureComponent from './pro/compPureComponent/TestPureComponent'
// import TestComRenderProp from './pro/comRenderProps/TestComRenderProp'
// import TestComRenderPropHOC from './pro/comRenderProps/TestComRenderPropHOC'
// import TestComPortals from './pro/comPortals/TestComPortals'
// import TestCompErrorBoundary from './pro/compErrorBoundary/TestCompErrorBoundary'
// import TestCompEventPro from './pro/compEventPro/TestCompEventPro'
// import TestStateHook from './hook/stateHook/TestStateHook'
// import TestEffectHook from './hook/effectHook/TestEffectHook'
// import TestCusHook from './hook/cusHook/TestCusHook'
// import TestCusComp from './hook/cusHook/TestCusComp'
// import TestContextComp from './hook/contextHook/TestContextComp'
import TextContextHook from './hook/contextHook/TextContextHook'
import TestImperativeHook from './hook/imperativeHook/TestImperativeHook';
import TestLayoutEffectHook from './hook/layoutEffectHook/TestLayoutEffectHook';
import TestMemoHook from './hook/memoHook/TestMemoHook';
import TestRefHook from './hook/refHook/TestRefHook';
import QianTao from './router/example/QianTao';
import QuanXian from './router/example/QuanXian';
import QuickStart from './router/example/QuickStart';
import ReactRoutAnimation from './router/example/ReactRoutAnimation';
import StaticRoute from './router/example/StaticRoute';
import TestRouteGuard from './router/example/TestRouteGuard';
import TestBaseTransition from './transition/base/TestBaseTransition';
import FadeTransition from './transition/common/FadeTransition';
import TestFadeTransition from './transition/common/FadeTransition/TestFadeTransition';
import TestCSSTransition from './transition/CSSTransition/TestCSSTransition';
import TestSwitchTransition from './transition/SwitchTransition/TestSwitchTransition';
import TestTransitionGroup from './transition/TransitionGroup/TestTransitionGroup';

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
        {/* <TestComPortals/> */}
        {/* <TestCompErrorBoundary /> */}
        {/*  <TestCompEventPro/> */}
        {/* <TestStateHook /> */}
        {/* <TestEffectHook/> */}
        {/* <TestCusHook/> */}
        {/* <TestCusComp/> */}
        {/* <TestContextComp/> */}
        {/* <TextContextHook/> */}
        {/* <TestCallbackHook></TestCallbackHook> */}
        {/* <TestMemoHook/> */}
        {/* <TestRefHook/>
        <TestRefHook/> */}
        {/* <TestImperativeHook/> */}
        {/* <TestLayoutEffectHook/> */}
        {/* <TestBaseTransition/> */}
        {/* <TestSwitchTransition/>
        <TestCSSTransition/> */}
        {/* <TestTransitionGroup/> */}
        {/* <TestFadeTransition/> */}

        {/* <QuickStart/> */}
        {/* <QianTao/> */}
        {/* <QuanXian/> */}
        {/* <StaticRoute></StaticRoute> */}
        {/* <TestRouteGuard/> */}
        <ReactRoutAnimation/>
      </div>
    )
  }
}
