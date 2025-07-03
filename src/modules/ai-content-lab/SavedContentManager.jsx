
import React, { useState, useEffect } from 'react';

// Dummy saved content
const dummySavedContent = [
  { id: 1, title: 'LinkedIn Post - Networking Tips', savedOn: '2025-06-24' },
  { id: 2, title: 'Resume Bullet - Leadership Achievement', savedOn: '2025-06-22' },
  { id: 3, title: 'Cover Letter Intro - Software Engineer Role', savedOn: '2025-06-20' },
];

export default function SavedContentManager() {
  const [savedContent, setSavedContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching saved drafts
    setTimeout(() => {
      setSavedContent(dummySavedContent);
      setLoading(false);
    }, 900);
  }, []);

  const handleDelete = (id) => {
    // Simulate deletion from local state
    setSavedContent(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-lg font-semibold mb-3">Saved AI Drafts</h2>

      {loading ? (
        <p>Loading saved drafts...</p>
      ) : savedContent.length === 0 ? (
        <p>No saved drafts found.</p>
      ) : (
        <ul className="space-y-3 text-sm">
          {savedContent.map(item => (
            <li key={item.id} className="border p-2 rounded bg-gray-50 flex justify-between items-center">
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-xs text-gray-500">Saved on: {item.savedOn}</p>
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 text-xs"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect to backend saved content API later */}
      </div>
    </div>
  );
}
