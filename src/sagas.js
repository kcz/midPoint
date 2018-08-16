import { all } from "redux-saga/effects";
import authSagas from "./pages/Common/Auth/saga";
import todoSagas from "./pages/Todo/saga";
import devToolsSaga from "./pages/DevTools/saga";

export default function* rootSaga(getState) {
  yield all([authSagas(), todoSagas(), devToolsSaga()]);
}
