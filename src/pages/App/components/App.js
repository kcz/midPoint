import React, { Component } from "react";
import { Layout } from "antd";
import { Debounce } from "react-throttle";
import WindowResizeListener from "react-window-size-listener";
import { ThemeProvider } from "styled-components";
import Sidebar from "layout/Sidebar/Sidebar";
import Topbar from "layout/Topbar/Topbar";
import Router from "../Router";
import { siteConfig } from "settings";
import themes from "settings/themes";
import { themeConfig } from "settings";
import AppHolder from "./commonStyle";
import "./global.css";

const { Content, Footer } = Layout;

export default class extends Component {
  render() {
    const { url } = this.props.match;
    const { height } = this.props;
    const appHeight = window.innerHeight;
    return (
      <ThemeProvider theme={themes[themeConfig.theme]}>
        <AppHolder>
          <Layout style={{ height: appHeight }}>
            <Debounce time="300" handler="onResize">
              <WindowResizeListener
                onResize={windowSize =>
                  this.props.toggleAll(
                    windowSize.windowWidth,
                    windowSize.windowHeight
                  )
                }
              />
            </Debounce>
            <Topbar url={url} />
            <Layout style={{ flexDirection: "row", overflowX: "hidden" }}>
              <Sidebar url={url} />
              <Layout
                className="isoContentMainLayout"
                style={{
                  height: height
                }}
              >
                <Content
                  className="isomorphicContent"
                  style={{
                    padding: "70px 0 0",
                    flexShrink: "0",
                    background: "#f1f3f6",
                    position: "relative"
                  }}
                >
                  <Router url={url} />
                </Content>
                <Footer
                  style={{
                    background: "#ffffff",
                    textAlign: "center",
                    borderTop: "1px solid #ededed"
                  }}
                >
                  {siteConfig.footerText}
                </Footer>
              </Layout>
            </Layout>
          </Layout>
        </AppHolder>
      </ThemeProvider>
    );
  }
}
