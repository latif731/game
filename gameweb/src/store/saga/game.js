import axios from "axios";
import { BASE_URL, API_KEY } from "../const/server";
import { put, takeEvery } from "redux-saga/effects";
import * as types from "../const/types";

function* getGames(actions) {
  const { page = 1 } = actions;
  try {
    const res = yield axios.get(
      `https://api.rawg.io/api/games?key=550b43ebb1424d9f9009942cc3b3a4ca&page=1`
    );
    // console.log(res);
    yield put({
      type: types.GET_GAME_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: types.GET_GAME_FAIL,
      error: err,
    });
  }
}

export function* watchGetGames() {
  yield takeEvery(types.GET_GAME_BEGIN, getGames);
}
