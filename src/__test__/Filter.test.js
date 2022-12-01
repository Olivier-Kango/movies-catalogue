import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import YearsFilter from '../components/Filter/Filter';
import Movies from '../components/Movies/Movies';
import store from '../redux/configureStore';

describe('Testing the Years Filter', () => {
  test('Should render', () => {
    render(
      <Provider store={store}>
        <Movies>
          <YearsFilter />
        </Movies>
      </Provider>,
    );
  });
});
