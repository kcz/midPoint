const actions = {
  ADD_ENTITY_REQUEST: "ADD_ENTITY_REQUEST",
  ADD_ENTITY_SUCCEEDED: "ADD_ENTITY_SUCCEEDED",
  ADD_ENTITY_FAILED: "API_CALL_FAILED",

  addEntity: text => ({
    type: actions.ADD_ENTITY,
    text
  })
};
export default actions;
