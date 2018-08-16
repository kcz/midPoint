import React, { Component } from "react";

import { Button } from "antd";

export default class extends Component {
  handleErrorTracking = () => {
    throw new Error("Error happened: demostration!");
  };
  render() {
    return (
      <div>
        <h2>Error Track</h2>
        <Button type="primary" onClick={this.handleErrorTracking}>
          Trigger an Error
        </Button>
      </div>
    );
  }
}
