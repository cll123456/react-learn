import React, { Component } from 'react'
import Page from './demo/Page'

export default class PageTest extends Component {
  render() {
    return (
      <div>
        <Page total={100} pageSize={8} panelNum={6} currentPage={1}></Page>
      </div>
    )
  }
}
