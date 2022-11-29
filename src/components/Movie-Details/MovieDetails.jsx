import React from 'react';
import { Link } from 'react-router-dom';

const MovieDetails = () => (
  <div>
    Details
    <br />
    <Link to="/">
      <button type="button">Back</button>
    </Link>
  </div>
);

export default MovieDetails;
