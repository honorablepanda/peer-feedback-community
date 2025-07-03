
import React, { useState, useEffect } from 'react';

// Dummy saved optimized posts
const dummyPosts = [
  { id: 1, title: 'LinkedIn Announcement Post', savedOn: '2025-06-25' },
  { id: 2, title: 'Networking Message Draft', savedOn: '2025-06-24' },
  { id: 3, title: 'Outreach Email Template', savedOn: '2025-06-23' },
];

export default function SavedOptimizedPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetch
    setTimeout(() => {
      setPosts(dummyPosts);
      setLoading(false);
    }, 800);
  }, []);

  const handleDelete = (id) => {
    setPosts(prev => prev.filter(post => post.id !== id));
  };

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold mb-3">Saved Optimized Posts</h2>

      {loading ? (
        <p>Loading saved posts...</p>
      ) : posts.length === 0 ? (
        <p>No saved optimized posts found.</p>
      ) : (
        <ul className="space-y-3 text-sm">
          {posts.map(post => (
            <li key={post.id} className="border p-2 rounded bg-gray-50 flex justify-between items-center">
              <div>
                <p className="font-medium">{post.title}</p>
                <p className="text-xs text-gray-500">Saved on: {post.savedOn}</p>
              </div>
              <button
                onClick={() => handleDelete(post.id)}
                className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 text-xs"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect to backend saved posts API later */}
      </div>
    </div>
  );
}
