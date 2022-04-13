import {
  ADD_MOVIES,
  DELETE_MOVIE,
  LOADING,
  RESET,
  SORT_ASC,
  SORT_DESC,
  UPDATE_MOVIE,
} from "../actions/actionsTypes";

const initialState = {
  movies: [],
  loading: false,
};

export const movieReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case RESET:
      return {
        ...state,
        movies: [],
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.imdbID !== action.payload),
      };
    case UPDATE_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.imdbID === action.payload.id
            ? { ...movie, Title: action.payload.data }
            : movie
        ),
      };
    case SORT_ASC:
      return {
        ...state,
        movies: state.movies.sort((a, b) => b.Title.length - a.Title.length),
      };
    case SORT_DESC:
      return {
        ...state,
        movies: state.movies.sort((a, b) => a.Title.length - b.Title.length),
      };
    default:
      return state;
  }
};
