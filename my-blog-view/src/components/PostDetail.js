import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogBox.css';
import './PostDetail.css';  // We'll create this file for additional styling

function PostDetail() {
  // Grab the postId parameter from the URL
  const { postId } = useParams();

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch the post’s data
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error('Error fetching post:', error));

    // Fetch this post’s comments
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error('Error fetching comments:', error));
  }, [postId]);

  if (!post) {
    return <div style={{ padding: '1rem' }}>Loading post...</div>;
  }

  return (
    <div style={{ padding: '1rem' }}>
      {/* Place the Comments heading at the top */}
      <h2 className="comments-heading">Comments</h2>

      {/* The Back to Posts link with larger text */}
      <Link to="/" className="back-link">
        &larr; Back to Posts
      </Link>

      {/* The Post details in a white blog box */}
      <div className="blog-box">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>

      {/* Render the comments in white boxes */}
      {comments.map((comment) => (
        <div key={comment.id} className="blog-box">
          <h3>{comment.name}</h3>
          <p><strong>{comment.email}</strong></p>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostDetail;
