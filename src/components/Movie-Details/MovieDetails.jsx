import React from 'react';
import { HashLink } from 'react-router-hash-link';
import store from '../../redux/configureStore';

const MovieDetails = () => {
  const url = window.location.href;
  const path = url.split('/')[3];
  const { movies } = store.getState();

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
