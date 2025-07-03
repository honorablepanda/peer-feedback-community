
import React, { useState, useEffect } from 'react';

// Dummy data for now - replace with backend API response later
const dummyThreads = [
  {
    id: 1,
    title: 'How can I improve my resume summary section?',
    author: 'User123',
    replies: 5,
    lastReply: '2 hours ago'
  },
  {
    id: 2,
    title: 'Can someone review my STAR story for behavioral interviews?',
    author: 'CareerSeeker88',
    replies: 3,
    lastReply: '1 day ago'
  },
  {
    id: 3,
    title: 'Feedback request: LinkedIn headline ideas',
    author: 'JobHunter42',
    replies: 2,
    lastReply: '4 hours ago'
  }
];

export default function CommunityForum() {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call delay
    setTimeout(() => {
      setThreads(dummyThreads);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Peer Feedback & Community Forum</h1>
      
      {loading ? (
        <p>Loading threads...</p>
      ) : (
        <ul className="space-y-4">
          {threads.map(thread => (
            <li key={thread.id} className="border p-4 rounded shadow-sm hover:bg-gray-50">
              <h2 className="text-lg font-semibold">{thread.title}</h2>
              <p className="text-sm text-gray-600">
                Posted by {thread.author} • {thread.replies} replies • Last reply: {thread.lastReply}
              </p>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + Start New Thread
        </button>
      </div>
    </div>
  );
}
