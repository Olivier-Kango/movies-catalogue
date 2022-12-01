import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../redux/movies/movies';
import Movie from './Movie';
import YearsFilter from '../Filter/Filter';
import './Movies.css';

const Movies = () => {
  const moviess = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => { if (moviess.length === 0) { dispatch(fetchMovies('Home')); } }, []);

  const moviesAll = Array.from(moviess).sort((a, b) => b.popularity - a.popularity);
  const [filterTextValue, updateFilterText] = useState('All');

  const movies = moviesAll.filter((movie) => {
    if (filterTextValue === 'All') {
      return movie;
    }
    return filterTextValue === movie.release_date.split('-')[0];
  });

  const ref = useRef(null);
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(fetchMovies(ref.current.value));
  };

  const onFilterValueSelected = (filterValue) => {
    updateFilterText(filterValue);
  };

  return (
    <div className="container">
      <h1>Movies Catalogue</h1>
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
      <YearsFilter loadedMovies={moviesAll} filterValueSelected={onFilterValueSelected} />
      <br className="br" />
      <div className="movies">
        {movies.map((movie) => (
          <div
            key={`${movie.id}`}
            id={movie.id}
            className="movie"
          >
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
    </div>
  );
};

export default Movies;
