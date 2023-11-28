import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './Content';

describe('Content', () => {
  test('renders Home component when path is / or /home', () => {
    render(
      <Router>
        <Content />
      </Router>
    );

    expect(screen.getByText('Home Component')).toBeInTheDocument();
  });

  test('renders User component when path is /user', () => {
    render(
      <Router>
        <Content />
      </Router>
    );

    expect(screen.getByText('User Component')).toBeInTheDocument();
  });

  test('renders NotFound component when path is not recognized', () => {
    render(
      <Router>
        <Content />
      </Router>
    );

    expect(screen.getByText('404 Not Found')).toBeInTheDocument();
  });

});
