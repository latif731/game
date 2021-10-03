import axios from "axios";
import { put, takeEvery } from "@redux-saga/core/effects";
import * as types from "../const/types";
import { BASE_URL } from "../const/server";

function* getGenres({ id }) {
  try {
    const res = yield axios.get(
      `${BASE_URL}/genres/${id}?key=550b43ebb1424d9f9009942cc3b3a4ca`
    );
    yield put({
      type: types.GET_GAME_GENRE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: types.GET_GAME_GENRE_FAIL,
      error: err,
    });
  }
}

export function* watchgetGenres() {
  yield takeEvery(types.GET_GAME_GENRE_BEGIN, getGenres);
}
