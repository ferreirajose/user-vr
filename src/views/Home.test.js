import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home'; 

test('renders Home component', () => {
  const { getByText } = render(<Home />);
  const homeElement = getByText(/Home/i);
  expect(homeElement).toBeInTheDocument();
});
