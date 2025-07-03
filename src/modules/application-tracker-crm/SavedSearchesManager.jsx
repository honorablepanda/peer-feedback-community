
import React, { useState, useEffect } from 'react';

// Dummy saved searches
const dummySearches = [
  { id: 1, query: 'Software Engineer in San Francisco', savedOn: '2025-06-20' },
  { id: 2, query: 'Product Manager remote', savedOn: '2025-06-18' },
  { id: 3, query: 'Data Scientist entry-level', savedOn: '2025-06-15' },
];

export default function SavedSearchesManager() {
  const [searches, setSearches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSearches(dummySearches);
      setLoading(false);
    }, 700);
  }, []);

  const handleDelete = (id) => {
    setSearches(prev => prev.filter(search => search.id !== id));
  };

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-lg font-semibold mb-3">Saved Job Searches</h2>

      {loading ? (
        <p>Loading saved searches...</p>
      ) : searches.length === 0 ? (
        <p>No saved searches found.</p>
      ) : (
        <ul className="space-y-3 text-sm">
          {searches.map(search => (
            <li key={search.id} className="border p-2 rounded bg-gray-50 flex justify-between items-center">
              <span>{search.query}</span>
              <button
                onClick={() => handleDelete(search.id)}
                className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 text-xs"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect to backend saved searches API later */}
      </div>
    </div>
  );
}
