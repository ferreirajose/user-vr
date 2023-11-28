import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './Menu'; 

test('renders Menu component with links', () => {
  const { getByText } = render(
    <Router>
      <Menu />
    </Router>
  );

  const homeLink = getByText(/Home/i);
  const userLink = getByText(/Usuários/i);

  expect(homeLink).toBeInTheDocument();
  expect(userLink).toBeInTheDocument();
});
