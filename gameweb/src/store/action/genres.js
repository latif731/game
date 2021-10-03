import * as types from "../const/types";

export const getGameGenre = (genre, page = 1) => {
  return {
    type: types.GET_GAME_GENRE_BEGIN,
    genre,
    page,
  };
};
