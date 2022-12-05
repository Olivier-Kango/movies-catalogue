/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import React from 'react';
import PropTypes from 'prop-types';

const YearsFilter = (props) => {
  const { loadedMovies, filterValueSelected } = props;

  const onFilterValueChanged = (e) => {
    filterValueSelected(e.target.value);
  };

  return (
    <div>
      <span>Select By Release Year </span>
      <select
        onChange={onFilterValueChanged}
      >
        <option>All</option>
        {loadedMovies.map((elt) => elt.release_date?.split('-')[0])
          .filter((v, i, a) => a.indexOf(v) === i)
          .sort((a, b) => b - a)
          .map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
      </select>
    </div>
  );
};

YearsFilter.propTypes = {
  filterValueSelected: PropTypes.func.isRequired,
  loadedMovies: PropTypes.instanceOf(Array).isRequired,
};

export default YearsFilter;
