import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../redux/movies/movies';

const MovieDetails = () => {
  const url = window.location.href;
  const path = url.split('/')[3];
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => { if (movies.length === 0) { dispatch(fetchMovies()); } }, []);

  const movie = movies.filter((movie) => movie.id === Number(path))[0];

  return (
    <div id={movie.id} key={`${movie.id}`}>
      <h2>{movie.original_title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={`${movie.original_title}`} />
      <p>
        <strong>Popularity: </strong>
        {movie.popularity}
      </p>
      <p>
        <strong>Vote count: </strong>
        {movie.vote_count}
      </p>
      <p>
        <strong>Original language: </strong>
        {movie.original_language}
      </p>
      <p>
        <strong>Overview: </strong>
        {movie.overview}
      </p>
      <p>
        <strong>Realease date: </strong>
        {movie.release_date}
      </p>
      <br />
      <HashLink to={`/#${movie.id}`} smooth>
        <button type="button">Back</button>
      </HashLink>
    </div>
  );
};

export default MovieDetails;
