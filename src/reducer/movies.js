import { actions, modes } from "./../constants";

const defaultState = {
  movies: [],
  page: 1,
  total_pages: 1,
  total_results: 0,
  movie: {},
  credits: [],
  query: "",
  mode: modes.POPULAR,
  loading: true
};

export default (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.LOAD_MOVIES:
      return {
        ...state,
        movies: [...payload.results.results],
        mode: payload.mode,
        page: payload.page,
        total_pages: payload.results.total_pages,
        loading: false
      };
    case actions.LOAD_NEXT_PAGE:
      return {
        ...state,
        page: payload.page,
        movies: [...state.movies, ...payload.results]
      };
    case actions.LOAD_MOVIE:
      return {
        ...state,
        movie: payload
      };
    case actions.SET_QUERY:
      return {
        ...state,
        query: payload.query
      };
    case actions.LOAD_CREDITS:
      return {
        ...state,
        credits: payload
      };
    case actions.CLEAR_STATE:
      return {
        movies: [],
        page: 1,
        query: ""
      };
    default:
      return state;
  }
};
