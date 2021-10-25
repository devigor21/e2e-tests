import React from 'react';
import { render, screen } from '@testing-library/react';

import Error from '.';

describe('Error component', () => {
  it('should not change', () => {
    const error = render(<Error />);
    expect(error).toMatchSnapshot();
  });
  it('should have correct header color', () => {
    render(<Error />);
    expect(screen.getByRole('heading')).toHaveStyle('color:rgb(40, 41, 51)');
  });
  it('should have correct header', () => {
    render(<Error />);
    expect(screen.getByText(/Error/i)).toBeInTheDocument();
  });
});
