import axios from 'axios';

const key = 'fd692f2bca8c5c05526b5565f2b36fec';
const query = 'Home';
// const input = document.querySelector('#search');

export default axios.create({
  baseURL: `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`,
});
