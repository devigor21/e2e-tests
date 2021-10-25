import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from '.';

describe('App component', () => {
  it('should not set error', () => {
    const post = () => render(<App />);
    expect(post).not.toThrow();
  });
});
