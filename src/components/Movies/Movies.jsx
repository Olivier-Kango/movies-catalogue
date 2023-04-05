import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HashLink } from 'react-router-hash-link';
import { fetchMovies } from '../../redux/movies/movies';
import Movie from './Movie';
import YearsFilter from '../Filter/Filter';
import '../../styling/Movies.scss';
import '../../styling/Home.scss';

const Movies = () => {
  const moviess = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => { if (moviess.length === 0) { dispatch(fetchMovies('Marvel')); } }, []);

  const moviesAll = Array.from(moviess).sort((a, b) => b.popularity - a.popularity);
  const [filterTextValue, updateFilterText] = useState('All');

  const movies = moviesAll.filter((movie) => {
    if (filterTextValue === 'All') {
      return movie;
    }
    return filterTextValue === movie.release_date?.split('-')[0];
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
    <div className="container" id="top">
      <h1>
        Movies Catalogue
        (
        {movies.length}
        )
      </h1>
      <form onSubmit={handleClick}>
        <input
          type="text"
          id="search"
          name="search"
          ref={ref}
          placeholder="Search Movies"
        />
        <button
          type="submit"
          id="button-search"
        >
          <i className="fa fa-search" />
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
            <Link
              to={`/${movie.id}`}
              state={{
                id: movie.id,
                popularity: movie.popularity,
                voteCount: movie.vote_count,
                backdropPath: movie.backdrop_path,
                title: movie.title,
                originalLanguage: movie.original_language,
                overview: movie.overview,
                releaseDate: movie.release_date,
              }}
              className="link"
            >
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
      {movies.length === 0 ? <p className="no-movies-found">no movies found</p> : ''}
      <footer>
        <HashLink to="#top" className="to-top" smooth>back to top ↑</HashLink>
        <p>
          Created by&nbsp;
          <a href="mailto: olivierkango@gmail.com">
            Olivier Kango
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Movies;
