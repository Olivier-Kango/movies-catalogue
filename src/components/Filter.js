/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './styles/posterStyles.module.scss';

const YearsFilter = (props) => {
  const { handleFilterChange, loadedMovies } = props;

  const yearSelectHandler = useCallback((event) => {
    handleFilterChange(event.target.value);
  }, [handleFilterChange]);

  return (
    <div className={styles.header}>
      <h1>Family Movies Catalogue</h1>
      <div>
        <span>Select By Production Year</span>
        <select
          onChange={yearSelectHandler}
        >
          <option>All</option>
          {loadedMovies.map((elt) => elt.release_date.split('-')[0])
            .filter((v, i, a) => a.indexOf(v) === i)
            .sort((a, b) => b - a)
            .map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

YearsFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  loadedMovies: PropTypes.instanceOf(Array).isRequired,
};

export default YearsFilter;
