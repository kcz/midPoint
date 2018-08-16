import actions from "./actions";

const initState = {
  apiCallResp: {}
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actions.API_CALL_SUCCEEDED:
      return {
        ...state,
        apiCallResp: action.data
      };
    default:
      return state;
  }
}
