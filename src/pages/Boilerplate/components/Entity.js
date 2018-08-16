import React, { Component } from "react";

import Field from "./Field";
import Wrapper from "./Entity.style";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: this.props.flag
    };
  }
  handleToggleFlag = event => {
    this.setState({ flag: !this.state.flag });
  };
  handleAddEntity = event => {
    this.props.addEntity("alpha");
  };
  render() {
    return (
      <Wrapper>
        <h2>Flag: {this.state.flag.toString()}</h2>
        <div>
          <button onClick={this.handleToggleFlag}>Change Flag</button>
          <button onClick={this.handleAddEntity}>Add Entity</button>
        </div>
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>
              <h3>{item.text}</h3>
            </li>
          ))}
        </ul>
        <Field />
      </Wrapper>
    );
  }
}
