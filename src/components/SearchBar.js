import React, { useState } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { fetchMoviesAction, resetAction } from "../redux/actions/movieActions";
function SearchBar() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const fetchMovies = (e) => {
    e.preventDefault();
    dispatch(resetAction());
    dispatch(fetchMoviesAction(search));
  };

  const clearSearch = (e) => {
    e.preventDefault();
    setSearch("");
  };
  return (
    <form className="search__container">
      <div className="search__input">
        <input
          type="text"
          value={search}
          placeholder="enter movie name to search..."
          onChange={(e) => setSearch(e.target.value.trim())}
        />
        <FaSearch />
      </div>

      <div className="search__buttons">
        <button type="submit" disabled={!search} onClick={fetchMovies}>
          Apply
        </button>
        <button onClick={clearSearch}>clear</button>
      </div>
    </form>
  );
}

export default SearchBar;
