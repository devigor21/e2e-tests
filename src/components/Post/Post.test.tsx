import React from 'react';
import { render, screen } from '@testing-library/react';

import Post from '.';

describe('Post component', () => {
  it('should not set error', () => {
    const post = () => render(<Post title="head" body="" id={1} userId={1} view="cards" />);
    expect(post).not.toThrow();
  });
  it('should not change', async () => {
    const post = render(<Post title="head" body="" id={1} userId={1} view="cards" />);
    expect(post).toMatchSnapshot();
  });
  it('gets correct title props', () => {
    render(<Post title="head" body="" id={1} userId={1} view="cards" />);
    screen.getByText('head');
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText(/hea/)).toBeInTheDocument();
  });
  it('gets correct body props', () => {
    render(<Post title="head" body="body" id={1} userId={1} view="cards" />);
    screen.getByText('body');
    expect(screen.getByText('body')).toBeInTheDocument();
  });
  it('should have correct header color', () => {
    render(<Post title="head" body="body" id={1} userId={1} view="cards" />);
    expect(screen.getByRole('heading')).toHaveStyle('color:rgb(40, 41, 51)');
  });
});
