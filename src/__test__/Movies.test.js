import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Movies from '../components/Movies/Movies';
import store from '../redux/configureStore';

describe('Testing the Movies page:', () => {
  test('Should render', () => {
    render(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Movies />} />
          </Routes>
        </Router>
      </Provider>,
    );
  });

  it('fectch Movie from API', () => {
    const { container } = render(
      <Router>
        <Routes>
          <Route path="/:id" element={<Movies />} />
        </Routes>
      </Router>,
    );
    container.querySelector('.movie');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Display Movies from API', () => {
    const { container } = render(
      <Router>
        <Routes>
          <Route path="/:id" element={<Movies />} />
        </Routes>
      </Router>,
    );
    container.querySelector('.movies');
    expect(container.firstChild).toMatchSnapshot();
  });
});
