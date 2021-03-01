import React, { Component, ComponentClass, ComponentType } from "react";
import { ICheckbox, ICom, ITypeList } from "./types";



export function List(Com: ComponentType<ICom>) {
  return class List extends Component<ITypeList> {
    render() {
      const listRM: JSX.Element[] = this.props.data.map(p => {
        return (
          <Com key={p.value} info={p} {...this.props}></Com>
        )
      })
      return (
        <>
          {listRM}
        </>
      )
    }
  }
}