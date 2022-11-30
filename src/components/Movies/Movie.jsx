import React from 'react';

const Movie = (movie) => {
  const { image, title } = movie;
  return <img src={`https://image.tmdb.org/t/p/w300${image}`} alt={`${title}`} />;
};

export default Movie;
