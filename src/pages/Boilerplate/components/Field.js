import React, { Component } from "react";

const style = {
  border: "1px solid pink",
  padding: "10px"
};

export default class extends Component {
  render() {
    return <p style={style}>Child Component: Field</p>;
  }
}
