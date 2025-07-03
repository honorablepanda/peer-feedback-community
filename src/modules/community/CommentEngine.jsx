
import React, { useState } from 'react';
import CommentInputForm from './CommentInputForm';

// Dummy initial comments
const initialComments = [
  { id: 1, author: 'User123', text: 'Great post! I like your resume format.', timestamp: '1 hour ago' },
  { id: 2, author: 'CareerSeeker88', text: 'I think you can improve your STAR story by adding more context.', timestamp: '30 mins ago' },
];

export default function CommentEngine() {
  const [comments, setComments] = useState(initialComments);

  const handleNewComment = (newText) => {
    const newComment = {
      id: comments.length + 1,
      author: 'CurrentUser',
      text: newText,
      timestamp: 'Just now',
    };
    setComments([newComment, ...comments]);
  };

  return (
    <div className="p-4 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-3">Discussion Thread</h2>

      <CommentInputForm onSubmit={handleNewComment} />

      <ul className="space-y-3 mt-4">
        {comments.map(comment => (
          <li key={comment.id} className="border p-3 rounded bg-gray-50">
            <p className="font-medium">{comment.author}</p>
            <p>{comment.text}</p>
            <p className="text-xs text-gray-500">{comment.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
