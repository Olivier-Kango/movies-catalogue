import { render } from '@testing-library/react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import MovieDetails from '../components/Movie-Details/MovieDetails';

describe('Testing the MoviesDetails page:', () => {
  test('Should render', () => {
    render(
      <Router>
        <Routes>
          <Route path="/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    );
  });
  it('fectch Movies Details', () => {
    const { container } = render(
      <Router>
        <Routes>
          <Route path="/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    );
    container.querySelector('.details');
    expect(container.firstChild).toMatchSnapshot();
  });
});
