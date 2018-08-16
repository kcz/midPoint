import { connect } from "react-redux";
import actions from "./actions";
import Todo from "./components/Todo";

import mockAPI from "./_mock/api";
mockAPI();

function mapStateToProps(state) {
  const { todos, colors } = state.Todo;
  return {
    todos,
    colors
  };
}
export default connect(
  mapStateToProps,
  actions
)(Todo);
