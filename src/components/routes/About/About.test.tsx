import React from 'react';
import { render, screen } from '@testing-library/react';

import About from '.';

describe('About component', () => {
  it('should not change', async () => {
    const about = render(<About />);
    expect(about).toMatchSnapshot();
  });
  it('should have different header color', () => {
    render(<About />);
    expect(screen.getByRole('heading')).toHaveStyle('color:rgb(40, 41, 51)');
  });
  it('should have correct header', () => {
    render(<About />);
    expect(screen.getByText(/This is website for homeworks/i)).toBeInTheDocument();
  });
});
