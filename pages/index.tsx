import React, { Component } from "react"
import * as TC from "./dashboard/styles"

export default class index extends Component {
  render() {
    return (
      <TC.Container>
        <TC.Content>
          <TC.Text>Dashboard</TC.Text>
        </TC.Content>
      </TC.Container>
    )
  }
}
