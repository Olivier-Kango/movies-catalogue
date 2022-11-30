import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Movie from './Movie';
import { fetchMovies } from '../../redux/movies/movies';

const Movies = () => {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => { if (movies.length === 0) { dispatch(fetchMovies()); } }, []);

  return (
    <div>
      {movies.map((movie) => (
        <div key={`${movie.id}`}>
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
