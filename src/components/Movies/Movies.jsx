import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { AppBar } from '@mui/material';
import Movie from './Movie';
import { fetchMovies } from '../../redux/movies/movies';
import './Movies.css';

const Movies = () => {
  const moviess = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => { if (moviess.length === 0) { dispatch(fetchMovies()); } }, []);
  const movies = Array.from(moviess).sort((a, b) => b.popularity - a.popularity);

  const ref = useRef(null);
  const handleClick = () => {
    console.log('value is:', ref.current.value);
  };

  return (
    <div>
      <navbar className="navbar">
        <input
          type="text"
          id="search"
          name="search"
          defaultValue="Home"
          // value={search}
          ref={ref}
        />
        <button
          type="button"
          id="button-search"
          onClick={handleClick}
        >
          Search
        </button>
      </navbar>
      <br className="br" />
      {movies.map((movie) => (
        <div key={`${movie.id}`} id={movie.id}>
          <Link to={`/${movie.id}`} className="link">
            <Movie
              image={movie.poster_path}
              id={movie.id}
              key={`${movie.id}`}
            />
          </Link>
          <p>
            Popularity:&nbsp;
            {movie.popularity}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Movies;
