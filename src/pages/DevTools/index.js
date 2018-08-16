import { connect } from "react-redux";
import actions from "./actions";
import Page from "./components/Page";

function mapStateToProps(state) {
  const { apiCallResp } = state.DevTools;
  return {
    apiCallResp
  };
}
export default connect(
  mapStateToProps,
  actions
)(Page);
