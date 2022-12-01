import React, { Component } from "react";
import Logo from "../../public/logo.svg";
import Image from "next/image";
import * as TC from "./styles";

export default class index extends Component {
  render() {
    return (
      <TC.Container>
        <Image src={Logo} alt="Logo" />
      </TC.Container>
    );
  }
}
