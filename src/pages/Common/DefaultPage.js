import React, { Component } from "react";
import LayoutContentWrapper from "components/utility/layoutWrapper";
import LayoutContent from "components/utility/layoutContent";

import { Icon } from "antd";

export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper style={{ height: "100vh" }}>
        <LayoutContent>
          <center>
            <Icon type="disconnect" style={{ fontSize: "64px" }} />
            <h1 style={{ color: "#F75D81" }}>
              {this.props.history.location.pathname.split("/").slice(-1)}
            </h1>
            <h2>Page is under construction</h2>
          </center>
          <pre>{JSON.stringify(this.props, null, 4)}</pre>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
