import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { connect } from "react-redux";

import App from "./pages/App";
import asyncComponent from "./utils/AsyncFunc";

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
const PublicRoutes = ({ history, isLoggedIn }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route
          exact
          path={"/"}
          component={asyncComponent(() => import("./pages/Common/SignIn"))}
        />
        <Route
          exact
          path={"/signin"}
          component={asyncComponent(() => import("./pages/Common/SignIn"))}
        />
        <RestrictedRoute
          path="/neptune"
          component={App}
          isLoggedIn={isLoggedIn}
        />
      </div>
    </ConnectedRouter>
  );
};

export default connect(state => ({
  isLoggedIn: state.Auth.idToken !== null
}))(PublicRoutes);
