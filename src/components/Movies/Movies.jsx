import React from 'react';
import { Link } from 'react-router-dom';
import Movie from './Movie';

const Movies = () => (
  <div>
    <Link to="/details">
      <Movie />
    </Link>
  </div>
);

export default Movies;
