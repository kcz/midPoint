import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import asyncComponent from "utils/AsyncFunc";

const routes = [
  {
    path: "",
    component: () => <Redirect to="/neptune/PageAdmin.menu.selfDashboard" />
  },
  {
    path: "PageAdmin.menu.selfDashboard",
    component: asyncComponent(() =>
      import("../SelfService/SelfDashboard/Index")
    )
  },
  {
    path: "PageAdmin.menu.profile",
    component: asyncComponent(() => import("../SelfService/Profile/Index"))
  },
  {
    path: "PageAdmin.menu.credentials",
    component: asyncComponent(() => import("../SelfService/Credentials"))
  },
  {
    path: "PageAdmin.menu.request",
    component: asyncComponent(() => import("../SelfService/Request"))
  },
  {
    path: "devtools.todo",
    component: asyncComponent(() => import("../Todo"))
  },
  {
    path: "devtools.index",
    component: asyncComponent(() => import("../DevTools"))
  },
  {
    path: "*",
    component: asyncComponent(() => import("../Common/DefaultPage"))
  }
];

export default class extends Component {
  render() {
    const { url, style } = this.props;
    return (
      <div style={style}>
        <Switch>
          {routes.map(singleRoute => {
            const { path, exact, ...otherProps } = singleRoute;
            return (
              <Route
                exact={exact === false ? false : true}
                key={singleRoute.path}
                path={`${url}/${singleRoute.path}`}
                {...otherProps}
              />
            );
          })}
        </Switch>
      </div>
    );
  }
}
