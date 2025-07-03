
import React, { useState, useEffect } from 'react';

// Dummy saved insights data
const dummyInsights = [
  { id: 1, title: 'TechCorp Growth Summary', savedOn: '2025-06-25' },
  { id: 2, title: 'Software Industry Trends', savedOn: '2025-06-24' },
  { id: 3, title: 'AI Hiring Market Overview', savedOn: '2025-06-23' },
];

export default function SavedInsightsManager() {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetch
    setTimeout(() => {
      setInsights(dummyInsights);
      setLoading(false);
    }, 800);
  }, []);

  const handleDelete = (id) => {
    // Delete from local state (frontend-only)
    setInsights(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold mb-3">Saved Research Insights</h2>

      {loading ? (
        <p>Loading saved insights...</p>
      ) : insights.length === 0 ? (
        <p>No saved insights found.</p>
      ) : (
        <ul className="space-y-3 text-sm">
          {insights.map(item => (
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
        {/* TODO: Sync with backend saved insights API later */}
      </div>
    </div>
  );
}
