import * as types from "../const/types";

export const getGameDetail = (id) => {
  return {
    type: types.GET_DETAIL_GAME_BEGIN,
    id,
  };
};
