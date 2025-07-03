
import React, { useState } from 'react';

export default function CommentInputForm({ onSubmit }) {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim() !== '') {
      onSubmit(commentText);
      setCommentText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        className="w-full border rounded p-2 mb-2"
        rows={3}
        placeholder="Write your comment..."
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
      >
        Post Comment
      </button>
    </form>
  );
}
