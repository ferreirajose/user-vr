import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import UserTable from './UserTable';

jest.mock('axios');

const mockData = {
  data: {
    users: [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        image: 'https://dummyimage.com/50x50',
        gender: 'Male',
        email: 'john.doe@example.com',
      },
      
    ],
  },
};

describe('UserTable', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue(mockData);
  });

  test('fetches and displays user data', async () => {
    render(<UserTable />);

    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Male')).toBeInTheDocument();
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
  });

});
