import axios from "axios";
import { URL_POPULAR, URL_MOVIE, KEY, URL_SEARCH, URL_GENRES } from "../api";
import { actions, modes } from "./../constants";

const getUrl = (page, query, mode) => {
  return mode === modes.POPULAR
    ? `${URL_POPULAR}&page=${page}`
    : `${URL_SEARCH}&query=${query}&page=${page}`;
};

const loadMovies = (
  page = 1,
  query = "",
  mode = modes.POPULAR
) => async dispatch => {
  const response = await axios.get(getUrl(page, query, mode));

  dispatch({
    type: actions.LOAD_MOVIES,
    payload: { results: response.data, mode, query, page }
  });
};

const loadNextPage = (
  page = 1,
  query = "",
  mode = modes.POPULAR
) => async dispatch => {
  const response = await axios.get(getUrl(page, query, mode));

  dispatch({
    type: actions.LOAD_NEXT_PAGE,
    payload: response.data
  });
};

const loadMovie = id => async dispatch => {
  const response = await axios.get(`${URL_MOVIE}/${id}?api_key=${KEY}`);

  dispatch({
    type: actions.LOAD_MOVIE,
    payload: response.data
  });
};

const loadCredits = id => async dispatch => {
  const response = await axios.get(`${URL_MOVIE}/${id}/credits?api_key=${KEY}`);

  dispatch({
    type: actions.LOAD_CREDITS,
    payload: response.data.cast
  });
};

const loadGenres = () => async dispatch => {
  const response = await axios.get(URL_GENRES);

  dispatch({
    type: actions.LOAD_GENRES,
    payload: response.data.genres
  });
};

const setQuery = query => async dispatch => {
  dispatch({
    type: actions.SET_QUERY,
    payload: { query }
  });
};

const clearState = () => async dispatch => {
  dispatch({
    type: actions.CLEAR_STATE
  });
};

export {
  loadMovies,
  loadNextPage,
  loadMovie,
  loadCredits,
  setQuery,
  clearState,
  loadGenres
};
