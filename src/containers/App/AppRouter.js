import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import asyncComponent from "../../helpers/AsyncFunc";

const routes = [
  {
    path: "",
    component: ()=>(<Redirect to="/neptune/PageAdmin.menu.selfDashboard" />)
  },
  {
    path: "PageAdmin.menu.selfDashboard",
    component: asyncComponent(() => import("../selfService/selfDashboard/index"))
  },
  {
    path: "PageAdmin.menu.profile",
    component: asyncComponent(() => import("../selfService/profile/index"))
  },
  {
    path: "PageAdmin.menu.credentials",
    component: asyncComponent(() => import("../selfService/Credentials"))
  },
  {
    path: "PageAdmin.menu.request",
    component: asyncComponent(() => import("../selfService/Request"))
  },
  {
    path: "*",
    component: asyncComponent(() => import("../Page/DefaultPage"))
  }
];

class AppRouter extends Component {
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

export default AppRouter;
