
import React, { useState, useEffect } from 'react';

// Dummy comment history data
const dummyHistory = [
  { id: 1, text: 'Great resume! I love your skills section.', date: '2025-06-10' },
  { id: 2, text: 'Consider adding more quantifiable results.', date: '2025-06-15' },
  { id: 3, text: 'Your cover letter opening is strong.', date: '2025-06-20' },
];

export default function CommentHistory() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch delay
    setTimeout(() => {
      setHistory(dummyHistory);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold mb-3">Your Comment History</h2>
      
      {loading ? (
        <p>Loading comment history...</p>
      ) : history.length === 0 ? (
        <p>You haven't posted any comments yet.</p>
      ) : (
        <ul className="space-y-3">
          {history.map(comment => (
            <li key={comment.id} className="border p-3 rounded bg-gray-50">
              <p>{comment.text}</p>
              <p className="text-xs text-gray-500">Posted on {comment.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
