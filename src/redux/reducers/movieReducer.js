const initialState = {
  movies: [],
};

export const movieReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_MOVIES":
      return {
        ...state,
        movies: action.payload,
      };
    case "DELETE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.imdbID !== action.payload),
      };
    case "UPDATE_MOVIE":
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.imdbID === action.payload.id
            ? { ...movie, Title: action.payload.data }
            : movie
        ),
      };

    default:
      return state;
  }
};
