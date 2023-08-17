import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import Navbar from './Navbar';
import { FaSearch } from 'react-icons/fa';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const response = await axios.get(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=1df98676a61f34dcffcc05966eeec6d4'
    );
    setMovies(response.data.results);
  };

  const handleSearch = async () => {
    if (query === '') {
      setSearchResults([]);
      return;
    }

    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=1df98676a61f34dcffcc05966eeec6d4&query=${query}`
    );
    setSearchResults(response.data.results);
  };

  return (
    <div>
      <Navbar />
      <div className="movie-list">
      <input
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            <FaSearch />
          </button>
        
        <div className="movie-grid">
          {(query !== '' ? searchResults : movies).map((movie) => (
            <Link style={{textDecoration: "none"}} key={movie.id} to={`/details/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
