import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3/search/movie?api_key=fd692f2bca8c5c05526b5565f2b36fec&query=Home',
});
