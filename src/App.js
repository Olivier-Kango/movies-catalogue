import './App.css';
import { Routes, Route } from 'react-router-dom';
import Movies from './components/Movies/Movies';
import MovieDetails from './components/Movie-Details/MovieDetails';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/:id" element={<MovieDetails />} />
    </Routes>
  </div>
);

export default App;
