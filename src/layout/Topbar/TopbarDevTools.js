import React, { Component } from "react";
import { Popover } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TopbarDropdownWrapper from "./TopbarDropdown.style";

class TopbarDevTools extends Component {
  constructor(props) {
    super(props);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
    this.hide = this.hide.bind(this);
    this.state = {
      visible: false
    };
  }
  hide() {
    this.setState({ visible: false });
  }
  handleVisibleChange() {
    this.setState({ visible: !this.state.visible });
  }
  render() {
    const { customizedTheme, url } = this.props;
    const content = (
      <TopbarDropdownWrapper>
        <div className="isoDropdownHeader">
          <h3>DevTools</h3>
        </div>
        <div className="isoDropdownBody">
          <Link
            to={`${url}/devtools.todo`}
            className="isoDropdownListItem"
            key="todo"
          >
            <h5>Todo Examples</h5>
            <p>Demostrate Redux Saga and API call</p>
          </Link>
          <a
            target="_blank"
            href="/swagger-ui"
            className="isoDropdownListItem"
            key="swagger-ui"
          >
            <h5>Swagger UI</h5>
            <p>Visualize and interact with the API’s resources</p>
          </a>
          <a
            target="_blank"
            href="/swagger-editor"
            className="isoDropdownListItem"
            key="swagger-editor"
          >
            <h5>Swagger Editor</h5>
            <p>Edit Swagger API specifications in YAML</p>
          </a>
          <Link
            to={`${url}/devtools.index`}
            className="isoDropdownListItem"
            key="features"
          >
            <h5>Dev Features</h5>
            <p>More demostration</p>
          </Link>
        </div>
        <p align="center">Should be removed in production.</p>
      </TopbarDropdownWrapper>
    );
    return (
      <Popover
        content={content}
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
        placement="bottomLeft"
      >
        <div className="isoIconWrapper">
          <i
            className="ion-wrench"
            style={{ color: customizedTheme.textColor }}
          />
        </div>
      </Popover>
    );
  }
}

export default connect(state => ({
  ...state.App,
  customizedTheme: state.ThemeSwitcher.topbarTheme
}))(TopbarDevTools);
