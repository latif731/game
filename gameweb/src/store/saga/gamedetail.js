import axios from "axios";
import * as types from "../const/types";
import { BASE_URL } from "../const/server";
import { put, takeEvery } from "redux-saga/effects";

function* gameDetail({ id }) {
  try {
    const res = yield axios.get(
      `${BASE_URL}/games/${id}?key=550b43ebb1424d9f9009942cc3b3a4ca`
    );
    yield put({
      type: types.GET_DETAIL_GAME_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: types.GET_DETAIL_GAME_FAIL,
      error: err,
    });
  }
}

export function* watchgameDetail() {
  yield takeEvery(types.GET_DETAIL_GAME_BEGIN, gameDetail);
}
