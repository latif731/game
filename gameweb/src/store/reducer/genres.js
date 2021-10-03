import * as types from "../const/types";

const initialState = {
  genreGame: {
    genre: [],
    itLoading: true,
    itSuccess: null,
    itError: null,
    message: [],
  },
};

const genres = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };

    case types.GET_GAME_GENRE_BEGIN:
      return {
        ...state,
        genreGame: {
          genre: payload,
          itLoading: true,
        },
      };
    case types.GET_GAME_GENRE_SUCCESS:
      return {
        ...state,
        genreGame: {
          itError: true,
          itLoading: false,
          message: payload,
          error: error,
        },
      };
  }
};

export default genres;
