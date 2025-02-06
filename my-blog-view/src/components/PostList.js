import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BlogBox.css';


function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch all posts
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="blog-box">
          <Link to={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.body.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
