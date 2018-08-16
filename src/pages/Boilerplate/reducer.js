import actions from "./actions";

const initState = {
  items: [],
  flag: false
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actions.ADD_ENTITY:
      const addedItem = {};
      return {
        ...state,
        items: state.items.concat(addedItem)
      };
    default:
      return state;
  }
}
