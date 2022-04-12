import axios from "axios";

export const addMovie = (data) => {
  return {
    type: "ADD_MOVIES",
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
    type: "DELETE_MOVIE",
    payload: movieId,
  };
};

export const updateMovieAction = (movieId, updatedData) => {
  return {
    type: "UPDATE_MOVIE",
    payload: { id: movieId, data: updatedData },
  };
};
