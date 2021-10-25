import React, { FC } from 'react';

import classes from './Post.module.scss';

type PProps = {
  userId: number,
  id: number,
  title: string,
  body: string,
  view: string
};

const Post: FC<PProps> = ({ title, body, view }) => (
  <div className={classes[view]}>
    <h3 style={{ color: 'rgb(40, 41, 51)' }}>{title}</h3>
    {body && <p>{body}</p>}
  </div>
);
export default Post;
