import React, { useState } from "react";
import { FaRegEye, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  deleteMovieAction,
  updateMovieAction,
} from "../redux/actions/movieActions";
import "./MovieRow.css";
import Modal from "react-modal";

function MovieRow({ idx, movie }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(movie.Title);

  const deleteMovie = (movieId) => {
    dispatch(deleteMovieAction(movieId));
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const saveUpdated = (movieId) => {
    dispatch(updateMovieAction(movieId, updatedTitle));
    closeModal();
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="modal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <p>Title of the Movie</p>
        <div className="modal__input">
          <input
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
        </div>
        <div className="modal__button">
          <button onClick={() => saveUpdated(movie.imdbID)}>
            Save and Update
          </button>
          <button onClick={closeModal}>Close modal</button>
        </div>
      </Modal>

      <tr className="movie__row">
        <td>{idx + 1}</td>
        <td>{movie.Title}</td>
        <td>
          <img src={movie.Poster} alt="poster" />
        </td>
        <td onClick={() => deleteMovie(movie.imdbID)}>
          <FaTrash className="movie__delete" />
        </td>
        <td onClick={() => setIsOpen(true)}>
          <FaRegEye className="movie__view" />
        </td>
      </tr>
    </>
  );
}

export default MovieRow;
