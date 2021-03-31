import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

describe('<Home />', () => {
  it('should render Home page', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('home-page')).toBeTruthy();
  });
});