import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout } from "antd";

// TODO: remove
import appActions from '../../pages/App/actions';

import TopbarNotification from "./TopbarNotification";
import TopbarDevTools from "./TopbarDevTools";
import TopbarSearch from "./TopbarSearch";
import TopbarUser from "./TopbarUser";
import TopbarWrapper from "./Topbar.style";
import themes from "settings/themes";
import { themeConfig } from "settings";

const { Header } = Layout;
const { toggleCollapsed } = appActions;
const customizedTheme = themes[themeConfig.theme];

class Topbar extends Component {
  render() {
    const { toggleCollapsed, locale } = this.props;
    const collapsed = this.props.collapsed && !this.props.openDrawer;
    const styling = {
      background: customizedTheme.backgroundColor,
      position: "fixed",
      width: "100%",
      height: 70
    };
    return (
      <TopbarWrapper>
        <Header
          style={styling}
          className={
            collapsed ? "isomorphicTopbar collapsed" : "isomorphicTopbar"
          }
        >
          <div className="isoLeft">
            <button
              className={
                collapsed ? "triggerBtn menuCollapsed" : "triggerBtn menuOpen"
              }
              style={{ color: customizedTheme.textColor }}
              onClick={toggleCollapsed}
            />
          </div>

          <ul className="isoRight">
            <li className="isoSearch">
              <TopbarSearch locale={locale} />
            </li>
            <li
                onClick={() => this.setState({ selectedItem: "devTools" })}
                className="isoDevTools"
              >
              <TopbarDevTools locale={locale} url={this.props.url} />
            </li>
            <li
                onClick={() => this.setState({ selectedItem: "notification" })}
                className="isoNotify"
              >
              <TopbarNotification locale={locale} />
            </li>
            <li
              onClick={() => this.setState({ selectedItem: "user" })}
              className="isoUser"
            >
              <TopbarUser />
            </li>
          </ul>
        </Header>
      </TopbarWrapper>
    );
  }
}

export default connect(
  state => ({
    ...state.App
  }),
  { toggleCollapsed }
)(Topbar);
