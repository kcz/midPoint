import { all, takeEvery, fork, put, call } from "redux-saga/effects";
import actions from "./actions";

export function* addEntity() {
  //
}

export function* watchAddEntity() {
  yield takeEvery(actions.ADD_ENTITY, addEntity);
}
export default function* rootSaga() {
  yield all([fork(watchAddEntity)]);
}
