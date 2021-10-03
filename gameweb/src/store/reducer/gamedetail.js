import * as types from "../const/types";

const initialState = {
  detailGame: {
    detail: [],
    inLoading: true,
    inSuccess: null,
    inError: null,
    message: [],
  },
};

const gamedetail = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };

    case types.GET_DETAIL_GAME_BEGIN:
      return {
        ...state,
        detailGame: {
          inLoading: true,
        },
      };
    case types.GET_DETAIL_GAME_SUCCESS:
      return {
        ...state,
        detailGame: {
          detail: payload,
          inLoading: true,
        },
      };
    case types.GET_DETAIL_GAME_FAIL:
      return {
        ...state,
        detailGame: {
          inError: true,
          inLoading: false,
          message: payload,
          error: error,
        },
      };
  }
};

export default gamedetail;
