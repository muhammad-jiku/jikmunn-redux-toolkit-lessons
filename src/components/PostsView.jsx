import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/Posts/PostsSlice';

const Posts = () => {
  const dispatch = useDispatch();
  const { isLoading, posts, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <h3>Loading....</h3>}
      {error && <h3 style={{ color: 'red' }}>Something went wrong! </h3>}
      <section>
        {posts &&
          posts.slice(0, 25).map((post) => (
            <article
              key={post.id}
              style={{
                border: '1px solid black',
                padding: '10px',
                margin: '10px',
              }}
            >
              <h3>
                {post.id}. {post.title}{' '}
              </h3>
              <p>{post.body}</p>
              <p>{'written by user no.' + post.userId}</p>
            </article>
          ))}
      </section>
    </div>
  );
};

export default Posts;
