import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieTable.css";
import MovieRow from "./MovieRow";
import { sortAscAction, sortDescAction } from "../redux/actions/movieActions";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function MovieTable() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const loading = useSelector((state) => state.movies.loading);
  const [toggle, setToggle] = useState(false);

  const sortMoviesAsc = () => {
    dispatch(sortAscAction());
    setToggle(!toggle);
  };

  const sortMoviesDesc = () => {
    dispatch(sortDescAction());
    setToggle(!toggle);
  };

  if (loading) return <p className="loading__text">loading...</p>;

  return (
    <>
      {movies?.length ? (
        <>
          <p className="movie__total">{movies?.length} movies found</p>
          <div>
            <div className="movie__sorBtn">
              <button onClick={sortMoviesAsc}>
                <FaArrowUp />
              </button>
              <button onClick={sortMoviesDesc}>
                <FaArrowDown />
              </button>
            </div>
            <p>Sort</p>
          </div>

          <table className="movie__table">
            <thead className="movie__header">
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Poster</th>
                <th>Action</th>
                <th>View</th>
              </tr>
            </thead>

            <tbody className="movie__body">
              {movies?.map((movie, idx) => (
                <MovieRow key={movie.imdbID} idx={idx} movie={movie} />
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p className="movie__noResult">
          No results found ! please enter a valid movie name
        </p>
      )}
    </>
  );
}

export default MovieTable;
