import actions from "./actions";

const colors = ["#7ED321", "#de1b1b", "#511E78", "#ff9009", "#42a5f5"];
const todos = [];

const initState = {
  todos,
  colors
};

export default function todoReducer(state = initState, action) {
  const todos = state.todos;
  switch (action.type) {
    case actions.LOAD_TODO_SUCCEEDED:
      return {
        ...state,
        todos: action.todos
      };
    case actions.ADD_TODO:
      const record = {
        id: new Date(),
        todo: action.todo,
        createTime: new Date(),
        color: Math.round(Math.random() * colors.length),
        completed: false
      };
      return {
        ...state,
        todos: [].concat(record, todos)
      };
    case actions.DELETE_TODO:
      return {
        ...state,
        todos: todos.filter(todo => todo.id !== action.id)
      };
    case actions.EDIT_TODO:
      return {
        ...state,
        todos: todos.map(todo => {
          return todo.id === action.todo.id ? action.todo : todo;
        })
      };
    case actions.MARK_ALL_COMPLETED:
      return {
        ...state,
        todos: todos.map(todo => ({ ...todo, completed: true }))
      };
    case actions.DELETE_COMPLETED:
      return {
        ...state,
        todos: todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
}
