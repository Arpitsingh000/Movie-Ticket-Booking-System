import React, { useState } from 'react';
import MovieCard from './MovieCard';
import '../styles/Movies.css';

const Movies = () => {
  // Sample movie data with actual image paths from public folder
  const allMovies = [
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
    {
      id: 5,
      title: 'Spider-Man: No Way Home',
      poster: '/spiderman no way home.webp',
      genre: 'Action, Adventure',
      rating: 8.3,
    },
    {
      id: 6,
      title: 'Dune',
      poster: '/dune.jpeg',
      genre: 'Adventure, Drama, Sci-Fi',
      rating: 8.1,
    },
    {
      id: 7,
      title: 'No Time to Die',
      poster: '/no time to die.jpeg',
      genre: 'Action, Adventure, Thriller',
      rating: 7.3,
    },
    {
      id: 8,
      title: 'Shang-Chi',
      poster: '/shang-chi.jpeg',
      genre: 'Action, Adventure, Fantasy',
      rating: 7.4,
    },
  ];

  const [movies, setMovies] = useState(allMovies);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');

  // Extract unique genres from movies
  const genres = ['All', ...new Set(allMovies.flatMap(movie => movie.genre.split(', ')))].sort();

  // Filter movies based on search term and selected genre
  const filteredMovies = allMovies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'All' || movie.genre.includes(selectedGenre);
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="movies-container">
      <h1>All Movies</h1>
      
      <div className="filter-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="genre-filter">
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredMovies.length > 0 ? (
        <div className="movies-grid">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>No movies found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Movies;