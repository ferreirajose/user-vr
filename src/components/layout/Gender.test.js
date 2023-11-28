import React from 'react';
import { render } from '@testing-library/react';
import Gender from './Gender';

test('renders Gender component with male icon', () => {
  const { getByText } = render(<Gender gender="male" />);
  const maleIcon = getByText(/male/i);
  expect(maleIcon).toBeInTheDocument();
});

test('renders Gender component with female icon', () => {
  const { getByText } = render(<Gender gender="female" />);
  const femaleIcon = getByText(/female/i);
  expect(femaleIcon).toBeInTheDocument();
});
