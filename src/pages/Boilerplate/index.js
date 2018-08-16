import { connect } from "react-redux";

import actions from "./actions";
import Entity from "./components/Entity";

const { addEntity } = actions;

function mapStateToProps(state) {
  const { items, flag } = state.Boilerplate;
  return {
    items,
    flag
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addEntity: text => dispatch(addEntity(text))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entity);
