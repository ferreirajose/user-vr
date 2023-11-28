import React from 'react';
import { render } from '@testing-library/react';
import NotFound from './NotFound';

test('renders NotFound component', () => {
  const { getByText } = render(<NotFound />);
  const homeElement = getByText(/NotFound/i);
  expect(homeElement).toBeInTheDocument();
});
