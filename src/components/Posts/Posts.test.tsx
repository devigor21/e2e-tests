import React from 'react';
import { render, screen } from '@testing-library/react';

import Posts from '.';

describe('Post component', () => {
  const postsProps = [
    {
      id: 1,
      userId: 1,
      title: 'qui est esse',
      body: '',
    },
  ];
  it('should not change', async () => {
    const posts = render(<Posts posts={postsProps} search="" view="cards" />);
    expect(posts).toMatchSnapshot();
  });
});
