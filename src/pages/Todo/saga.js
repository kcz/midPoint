import { all, takeEvery, fork, call, put } from "redux-saga/effects";
import actions from "./actions";
import request from "utils/request";

const { LOAD_TODO_REQUEST, loadTodoSucceeded, loadTodoFailed } = actions;
function* loadTodo() {
  const url = `https://mock.data.com/loadTodo`;

  try {
    const resp = yield call(request, url);
    yield put(loadTodoSucceeded(resp.data));
  } catch (error) {
    yield put(loadTodoFailed(error));
  }
}

export function* watchLoadTodo() {
  yield takeEvery(LOAD_TODO_REQUEST, loadTodo);
}

export default function* rootSaga() {
  yield all([fork(watchLoadTodo)]);
}
