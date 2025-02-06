import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';

function App() {
  return (
    <Router>
      <Routes>
        {/* Display list of posts at the root ("/") */}
        <Route path="/" element={<PostList />} />

        {/* Display a single post's detail and comments ("/posts/:postId") */}
        <Route path="/posts/:postId" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
