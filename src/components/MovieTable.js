import React from "react";
import { useSelector } from "react-redux";
import "./MovieTable.css";
import MovieRow from "./MovieRow";

function MovieTable() {
  const movies = useSelector((state) => state.movies.movies);
  console.log(movies);
  return (
    <>
      {movies?.length ? (
        <table className="movie__table">
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Poster</th>
              <th>Action</th>
              <th>View</th>
            </tr>
          </thead>

          <tbody>
            {movies?.map((movie, idx) => (
              <MovieRow key={movie.imdbID} idx={idx} movie={movie} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="movie__noResult">No results found</p>
      )}
    </>
  );
}

export default MovieTable;
