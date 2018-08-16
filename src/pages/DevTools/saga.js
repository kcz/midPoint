import { all, takeEvery, fork, put, call } from "redux-saga/effects";
import actions from "./actions";
import request from "utils/request";

export function* apiCall() {
  const url =
    "/midpoint/ws/rest/users/00000000-0000-0000-0000-000000000002?options=%22%22";
  const req = {
    url,
    headers: {
      Authorization: "Basic YWRtaW5pc3RyYXRvcjo1ZWNyM3Q=",
      Accept: "application/json"
    }
  };
  try {
    const resp = yield call(request, req);
    yield put(actions.apiCallSucceeded(resp.data));
  } catch (error) {
    yield put(actions.apiCallFailed(error));
  }
}

export function* watchApiCall() {
  yield takeEvery(actions.API_CALL_REQUEST, apiCall);
}
export default function* rootSaga() {
  yield all([fork(watchApiCall)]);
}
