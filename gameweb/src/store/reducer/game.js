import * as types from "../const/types";

const initialState = {
  allGameList: {
    games: [],
    isLoading: true,
    isSuccess: null,
    isError: null,
    message: [],
  },
};

const listGames = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };

    case types.GET_GAME_BEGIN:
      return {
        ...state,
        allGameList: {
          isLoading: true,
        },
      };
    case types.GET_GAME_SUCCESS:
      return {
        ...state,
        allGameList: {
          isSuccess: true,
          isLoading: false,
          games: payload,
        },
      };
    case types.GET_GAME_FAIL:
      return {
        ...state,
        allGameList: {
          isError: true,
          isLoading: false,
          message: payload,
          // error: error,
        },
      };
  }
};

export default listGames;
