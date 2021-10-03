import * as types from "../const/types";

export const getGame = (page = 1) => {
  return {
    type: types.GET_GAME_BEGIN,
    page,
  };
};
