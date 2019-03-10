import { put, takeLatest, all } from "redux-saga/effects";

const STANDINGS_URL =
  "http://data.nba.net/prod/v1/current/standings_conference.json";

function* fetchStandings() {
  const json = yield fetch(STANDINGS_URL).then(response => response.json());
  yield put({ type: "FETCH_STANDINGS", json });
}

function* actionWatcher() {
  yield takeLatest("FETCH_STANDINGS", fetchStandings);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
