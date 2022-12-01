import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const FETCH_MOVIES = 'FETCH_MOVIES';

export const fetchMovies = createAsyncThunk(FETCH_MOVIES, async (props) => {
  const key = 'fd692f2bca8c5c05526b5565f2b36fec';
  const response = await axios.create({
    baseURL: `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${props}`,
  }).get();
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
    query: 'Home',
  }));
});

const Moviesslice = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {
    searchMovie: (state, action) => (state.map((m) => ({ ...m, query: action.payload }))),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => action.payload);
  },
});

export const { searchMovie } = Moviesslice.actions;
export default Moviesslice;
