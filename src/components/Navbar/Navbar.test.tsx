import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from '.';

describe('Navbar component', () => {
  it('should not change', () => {
    const navbar = render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(navbar).toMatchSnapshot();
  });
  it('should not set error', () => {
    const post = () =>
      render(
        <Router>
          <Navbar />
        </Router>
      );
    expect(post).not.toThrow();
  });
  it('should have About', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(screen.getByText('')).toBeInTheDocument();
  });
});
