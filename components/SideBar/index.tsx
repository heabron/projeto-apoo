import React, { Component } from "react";
import * as TC from "./styles";
import Logo from "../Logo";

export default class index extends Component {
  render() {
    return (
      <TC.Container>
        <Logo />
      </TC.Container>
    );
  }
}
