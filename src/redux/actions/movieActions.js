import axios from "axios";
import {
  ADD_MOVIES,
  DELETE_MOVIE,
  RESET,
  SORT_ASC,
  SORT_DESC,
  UPDATE_MOVIE,
} from "./actionsTypes";

export const addMovie = (data) => {
  return {
    type: ADD_MOVIES,
    payload: data,
  };
};

export const fetchMoviesAction = (search) => {
  return async (dispatch) => {
    const movies = await axios.get(
      `http://www.omdbapi.com/?s=${search}&apikey=378bc469`
    );
    dispatch(addMovie(movies.data.Search));
  };
};

export const deleteMovieAction = (movieId) => {
  return {
    type: DELETE_MOVIE,
    payload: movieId,
  };
};

export const updateMovieAction = (movieId, updatedData) => {
  return {
    type: UPDATE_MOVIE,
    payload: { id: movieId, data: updatedData },
  };
};

export const sortAscAction = () => {
  return {
    type: SORT_ASC,
  };
};

export const sortDescAction = () => {
  return {
    type: SORT_DESC,
  };
};

export const resetAction = () => {
  return {
    type: RESET,
  };
};
