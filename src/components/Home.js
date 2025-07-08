import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import MovieCard from './MovieCard';

const Home = () => {
  // Sample movie data with actual image paths from public folder
  const featuredMovies = [
    {
      id: 1,
      title: 'Avengers: Endgame',
      poster: '/avengers endgame.jpeg',
      genre: 'Action, Adventure',
      rating: 8.4,
    },
    {
      id: 2,
      title: 'Joker',
      poster: '/joker.jpeg',
      genre: 'Crime, Drama',
      rating: 8.5,
    },
    {
      id: 3,
      title: 'Parasite',
      poster: '/parasite.webp',
      genre: 'Comedy, Drama, Thriller',
      rating: 8.6,
    },
    {
      id: 4,
      title: 'The Lion King',
      poster: '/lion king.jpeg',
      genre: 'Animation, Adventure',
      rating: 7.9,
    },
  ];

  return (
    <div className="home">
      <div className="hero-container">
        <h1>Book Your Movie Tickets Online</h1>
        <p>Experience the best movies in theaters near you</p>
        <div className="hero-btns">
          <Link to="/movies" className="btn-primary">
            Browse Movies
          </Link>
        </div>
      </div>

      <div className="featured-movies">
        <h2>Featured Movies</h2>
        <div className="movie-grid">
          {featuredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>

      <div className="promo-section">
        <div className="promo-content">
          <h2>Special Offers</h2>
          <p>Get 20% off on your first booking with code: FIRST20</p>
          <Link to="/movies" className="btn-secondary">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;