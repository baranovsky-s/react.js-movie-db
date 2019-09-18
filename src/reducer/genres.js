import { actions } from "./../constants";

const defaultState = {
  genres: []
};

export default (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.LOAD_GENRES:
      return {
        genres: payload
      };
    default:
      return state;
  }
};
