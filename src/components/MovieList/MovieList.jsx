import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';
import SearchBox from '../SearchBox'; 

export const MovieList = () => {
  const [query, setQuery] = useState('all');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (query.trim()) {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const data = await response.json();
        setMovies(data);
      } else {
        setMovies([]); 
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <>
      {/* <h2 className="title text-xl mb-5">Movie Listy</h2> */}
      <SearchBox query={query} setQuery={setQuery} />
      <ul className="movie-list flex flex-wrap">
        {movies.map((movie, index) => (
          <li key={index} className="movie-card border rounded m-2">
            <Link to={`/show/${movie.show.id}`}>
              <img
                src={movie.show.image?.medium}
                alt={movie.show.name}
                className="movie-poster h-80 rounded-lg border-l-fuchsia-200 border-2 border-solid"
              />
              <div className="movie-info p-2">
                <h3 className="movie-title text-lg font-bold">{movie.show.name}</h3>
                <p className="movie-rating">Rating: {movie.show.rating?.average || 'N/A'}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
