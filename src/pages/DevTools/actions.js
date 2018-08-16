const actions = {
  API_CALL_REQUEST: "devtools/API_CALL_REQUEST",
  API_CALL_SUCCEEDED: "devtools/API_CALL_SUCCEEDED",
  API_CALL_FAILED: "devtools/API_CALL_FAILED",

  apiCall: () => ({
    type: actions.API_CALL_REQUEST
  }),
  apiCallSucceeded: data => ({
    type: actions.API_CALL_SUCCEEDED,
    data
  }),
  apiCallFailed: () => ({
    type: actions.API_CALL_FAILED
  })
};
export default actions;
