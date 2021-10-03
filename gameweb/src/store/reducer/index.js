import { combineReducers } from "redux";
import listGames from "./game";
import genres from "./genres";
import gamedetail from "./gamedetail";

const rootReducer = combineReducers({
  listGames,
  genres,
  gamedetail,
});

export default rootReducer;
