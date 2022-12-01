import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../redux/movies/movies';
import Movie from './Movie';
import './Movies.css';

const Movies = () => {
  const moviess = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => { if (moviess.length === 0) { dispatch(fetchMovies('Home')); } }, []);

  const movies = Array.from(moviess).sort((a, b) => b.popularity - a.popularity);

  const ref = useRef(null);
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(fetchMovies(ref.current.value));
  };

  return (
    <div>
      <navbar className="navbar">
        <form onSubmit={handleClick}>
          <input
            type="text"
            id="search"
            name="search"
            ref={ref}
          />
          <button
            type="submit"
            id="button-search"
          >
            Search
          </button>
        </form>
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
