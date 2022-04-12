import React, { useState } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { fetchMoviesAction } from "../redux/actions/movieActions";
function SearchBar() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const fetchMovies = () => {
    dispatch(fetchMoviesAction(search));
  };
  return (
    <div className="search__container">
      <div className="search__input">
        <input
          type="text"
          value={search}
          placeholder="enter movie name to search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch />
      </div>

      <div className="search__buttons">
        <button onClick={fetchMovies}>Apply</button>
        <button onClick={() => setSearch("")}>clear</button>
      </div>
    </div>
  );
}

export default SearchBar;
