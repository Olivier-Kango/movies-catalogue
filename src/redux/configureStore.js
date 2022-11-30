import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import Moviesslice from './movies/movies';

const rootReducer = {
  reducer: {
    movies: Moviesslice.reducer,
  },
};

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
