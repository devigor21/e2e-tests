import React from 'react';
import axios from 'axios';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home from '.';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('App component', () => {
  const posts = [
    {
      id: 1,
      userId: 1,
      title: 'qui est esse',
      body: '',
    },
  ];
  it('should not change', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data: posts }));
    const app = render(<Home />);

    expect(app).toMatchSnapshot();
  });

  it('should work', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data: posts }));

    render(<Home />);

    await act(() => Promise.resolve<any>({ data: posts }));
    expect(screen.queryByText('qui est esse')).toBeInTheDocument();

    await userEvent.type(screen.getByRole('textbox'), 'qui est esse');
    expect(screen.queryByText('qui est esse')).toBeInTheDocument();

    await userEvent.type(screen.getByRole('textbox'), 'Ramda');
    expect(screen.queryByText('qui est esse')).toBeNull();
  });
});
