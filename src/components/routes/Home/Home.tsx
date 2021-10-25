import React, { useState, useEffect, FC } from 'react';
import axios from 'axios';

import Posts from '../../Posts';
import Spinner from '../../Spinner';
import ErrorComponent from '../../Error';
import Search from '../../Search';
import classes from './Home.module.scss';

export type Post = {
  'userId': number,
  'id': number,
  'title': string,
  'body': string
};

const Home: FC = () => {
  const [postsData, setPostsData] = useState<Post[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [view, setView] = useState('cards');

  const showPost = () => setPosts(postsData.slice(0, posts.length + 3));
  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => setSearch(e.target.value.toLowerCase());

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setPosts(res.data.slice(0, 3));
        setPostsData(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  useEffect(() => {
    if (search.length > 3) {
      setPosts(postsData);
    } else {
      setPosts(postsData.slice(0, 3));
    }
  }, [search]);// eslint-disable-line

  if (error) return <ErrorComponent />;
  if (loading) return <Spinner />;

  return (
    <div className={classes.wrapper}>
      <div className={classes.filters}>
        <div className={classes.search}>
          <Search search={search} handleSearch={handleSearch} />
        </div>

        <div>
          <span>View filter:</span>
          <button
            type="button"
            className={classes.btn}
            onClick={() => setView('list')}
          >
            List view
          </button>
          <button
            type="button"
            className={classes.btn}
            onClick={() => setView('cards')}
          >
            Cards view
          </button>
        </div>
      </div>
      <Posts posts={posts} search={search} view={view} />
      {postsData.length > posts.length
        && (
          <button
            type="button"
            className={classes.btn}
            onClick={showPost}
          >Show more
          </button>
        )}
    </div>
  );
};

export default Home;
