import React, { useState, useEffect } from 'react';
import './commentWindow.css'

const CommentWindow = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetch('/api/comments')
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment: newComment }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        setComments([...comments, data]);
        setNewComment('');
      });
  };

  return (
    <div className="commentScrollWindow">
      <ul style={{ height: '200px', overflowY: 'scroll' }}>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newComment} onChange={handleChange} />
        <button type="submit">Add Comment</button>
        <p>This will be a scrolling comment window.</p>
      </form>
    </div>
  );
};

export default CommentWindow;
