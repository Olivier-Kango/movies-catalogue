import React from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import './Details.scss';

const MovieDetails = () => {
  const location = useLocation();

  const {
    popularity,
    id,
    voteCount,
    backdropPath,
    originalLanguage,
    title,
    overview,
    releaseDate,
  } = location.state;

  return (
    <div className="details">
      <h2>{title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${backdropPath}`} alt={`${title}`} />
      <p>
        <strong>Popularity: </strong>
        {popularity}
      </p>
      <p>
        <strong>Vote count: </strong>
        {voteCount}
      </p>
      <p>
        <strong>Original language: </strong>
        {originalLanguage}
      </p>
      <p className="overview">
        <strong>Overview: </strong>
        {overview}
      </p>
      <p>
        <strong>Release date: </strong>
        {releaseDate}
      </p>
      <br />
      <HashLink to={`/#${id}`} smooth>
        <button type="button">Back</button>
      </HashLink>
    </div>
  );
};

MovieDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.number.isRequired,
      popularity: PropTypes.number.isRequired,
      voteCount: PropTypes.number.isRequired,
      backdropPath: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      originalLanguage: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
