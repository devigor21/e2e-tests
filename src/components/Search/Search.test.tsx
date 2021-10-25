import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Search from '.';

describe('Search component', () => {
  it('should call handleSeach correct amount times', () => {
    const onChange = jest.fn();
    render(<Search search="" handleSearch={onChange} />);
    userEvent.type(screen.getByRole('textbox'), 'Hello');
    expect(onChange).toHaveBeenCalledTimes(5);
  });
  it('should call handleSeach', () => {
    const onChange = jest.fn();
    const { getByDisplayValue } = render(<Search search="initial" handleSearch={onChange} />);
    const input = getByDisplayValue('initial');
    fireEvent.change(input, { target: { value: 'search' } });
    expect(onChange).toBeCalled();
  });
  it('should not change', () => {
    const onChange = jest.fn();
    const search = render(<Search search="initial" handleSearch={onChange} />);
    expect(search).toMatchSnapshot();
  });
});
