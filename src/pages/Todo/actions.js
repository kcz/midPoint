const actions = {
  ADD_TODO: "ADD_TODO",
  EDIT_TODO: "EDIT_TODO",
  DELETE_TODO: "DELETE_TODO",
  LOAD_TODO_REQUEST: "LOAD_TODO_REQUEST",
  LOAD_TODO_SUCCEEDED: "LOAD_TODO_SUCCEEDED",
  LOAD_TODO_FAILED: "LOAD_TODO_FAILED",
  MARK_ALL_COMPLETED: "MARK_ALL_COMPLETED",
  DELETE_COMPLETED: "DELETE_COMPLETED",

  addTodo: todo => ({
    type: actions.ADD_TODO,
    todo
  }),
  editTodo: todo => ({
    type: actions.EDIT_TODO,
    todo
  }),
  deleteTodo: id => ({
    type: actions.DELETE_TODO,
    id
  }),
  loadTodo: () => ({
    type: actions.LOAD_TODO_REQUEST
  }),
  loadTodoSucceeded: todos => ({
    type: actions.LOAD_TODO_SUCCEEDED,
    todos
  }),
  loadTodoFailed: () => ({
    type: actions.LOAD_TODO_FAILED
  }),
  markAllCompleted: () => ({
    type: actions.MARK_ALL_COMPLETED
  }),
  deleteCompleted: () => ({
    type: actions.DELETE_COMPLETED
  })
};
export default actions;
