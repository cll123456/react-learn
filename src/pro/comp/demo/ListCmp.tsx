import React, { Component } from 'react'
import CardCmp from './CardCmp'
import { IListCmpProps, TListCmp } from './type'

export default class ListCmp extends Component<IListCmpProps> {
  private compList: TListCmp = [];
  constructor(props: IListCmpProps) {
    super(props)
    this.compList = this.props.list.map(item => (<CardCmp {...item} key={item.id} />))
  }
  render() {
    return (
      <div>
        <ul>
          {this.compList}
        </ul>
      </div>
    )
  }
}
