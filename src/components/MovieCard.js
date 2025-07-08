import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.poster} alt={movie.title} />
        <div className="movie-rating">{movie.rating}</div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p className="movie-genre">{movie.genre}</p>
        <Link to={`/movie/${movie.id}`} className="book-btn">
          Book Tickets
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;