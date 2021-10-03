import { all } from "@redux-saga/core/effects";
import { watchGetGames } from "./game";
import { watchgameDetail } from "./gamedetail";
import { watchgetGenres } from "./genres";

export default function* rootSaga() {
  //function generator
  yield all([watchGetGames(), watchgameDetail(), watchgetGenres]);
}
