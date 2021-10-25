import React from 'react';
import { render, screen } from '@testing-library/react';

import Spinner from '.';

describe('Spinner component', () => {
  it('should not change', () => {
    const spinner = render(<Spinner />);
    expect(spinner).toMatchSnapshot();
  });
  it('should have correct header color', () => {
    render(<Spinner />);
    expect(screen.getByRole('heading')).toHaveStyle('color:rgb(40, 41, 51)');
  });
  it('should have correct header', () => {
    const { getByText } = render(<Spinner />);
    expect(getByText(/Loading/i)).toBeInTheDocument();
  });
});
