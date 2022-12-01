import React, { Component } from "react"

import Header from "../Header"
import SideBar from "../SideBar"

import * as TC from "./styles"

interface LayoutProps {
  children: React.ReactNode
}

export default class index extends Component<LayoutProps> {
  render() {
    return (
      <TC.Container>
        <SideBar />
        <TC.RightSide>
          <Header />
          <TC.Content>{this.props.children}</TC.Content>
        </TC.RightSide>
      </TC.Container>
    )
  }
}
