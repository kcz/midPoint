import React, { Component } from "react";
import LayoutContentWrapper from "components/utility/layoutWrapper";
import LayoutContent from "components/utility/layoutContent";

import { Icon } from "antd";

import APICall from "./APICall";
import ErrorTrack from "./ErrorTrack";

export default class extends Component {
  render() {
    const { apiCall, apiCallResp } = this.props;
    return (
      <LayoutContentWrapper style={{ height: "100vh" }}>
        <LayoutContent>
          <center>
            <Icon type="tool" style={{ fontSize: "64px" }} />
            <h1 style={{ color: "#F75D81" }}>DevTools</h1>
          </center>
          <ErrorTrack />
          <br />
          <APICall apiCall={apiCall} data={apiCallResp} />
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
