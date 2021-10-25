import React, { FC } from 'react';

import { Post as PropsType } from '../routes/Home';
import Post from '../Post';
import classes from './Posts.module.scss';

type PostsProps = {
  posts: PropsType[];
  search: string,
  view: string
};

const Posts: FC<PostsProps> = ({ posts, search, view }) => {
  let postsList = posts;

  if (search.length > 3) {
    postsList = posts.filter((post) => post.body.toLowerCase().includes(search)
      || post.title.toLowerCase().includes(search));
  }

  return (
    <div className={classes[view]}>
      {postsList.map((post) => <Post key={post.id} view={view} {...post} />)}
    </div>
  );
};
export default Posts;
