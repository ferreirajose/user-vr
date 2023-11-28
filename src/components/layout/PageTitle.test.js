import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PageTitle from './PageTitle';

describe('PageTitle', () => {
  test('renders with title and subtitle', () => {
    const title = 'Test Title';
    const subtitle = 'Test Subtitle';

    render(<PageTitle title={title} subtitle={subtitle} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(subtitle)).toBeInTheDocument();
  });

  test('renders with error styling when error prop is true', () => {
    const title = 'Error Title';
    const subtitle = 'Error Subtitle';

    render(<PageTitle title={title} subtitle={subtitle} error={true} />);

    const pageTitle = screen.getByTestId('pageTitle'); 
    expect(pageTitle).toHaveClass('error');
  });

});
