import { connect } from "react-redux";

import authAction from "../Common/Auth/actions";
import appActions from "./actions";

import App from "./components/App";

const { logout } = authAction;
const { toggleAll } = appActions;

export default connect(
  state => ({
    auth: state.Auth,
    height: state.App.height
  }),
  { logout, toggleAll }
)(App);
