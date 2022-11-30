import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getMoviesApi from '../../api/moviesApi';

const FETCH_MOVIES = 'FETCH_MOVIES';

export const fetchMovies = createAsyncThunk(FETCH_MOVIES, async () => {
  const response = await getMoviesApi();
  const movies = response.data.results;
  return movies.map((movie) => ({
    id: movie.id,
    original_title: movie.original_title,
    poster_path: movie.poster_path,
    backdrop_path: movie.backdrop_path,
    popularity: movie.popularity,
    vote_count: movie.vote_count,
    original_language: movie.original_language,
    overview: movie.overview,
    release_date: movie.release_date,
  }));
});

const Moviesslice = createSlice({
  name: 'movies',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => action.payload);
  },
});

export default Moviesslice;
