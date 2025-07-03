import React, { useState, useEffect } from 'react';

// Dummy saved AI interactions
const dummyInteractions = [
  {
    id: 1,
    title: 'Salary Negotiation Advice',
    savedOn: '2025-06-20',
  },
  {
    id: 2,
    title: 'Resume Feedback Chat',
    savedOn: '2025-06-22',
  },
  {
    id: 3,
    title: 'Job Search Strategy Session',
    savedOn: '2025-06-25',
  },
];

export default function SavedInteractionsManager() {
  const [interactions, setInteractions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setInteractions(dummyInteractions);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend API call (e.g., GET /api/ai-career-agent/saved-interactions)
  }, []);

  const handleDelete = (interactionId) => {
    setInteractions((prev) => prev.filter((interaction) => interaction.id !== interactionId));
    alert(`Deleted saved interaction ID: ${interactionId}`);

    // TODO: Send delete request to backend API (e.g., DELETE /api/ai-career-agent/saved-interactions/:id)
  };

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Saved AI Interactions</h2>

      {loading ? (
        <div className="text-gray-500">Loading saved interactions...</div>
      ) : interactions.length > 0 ? (
        <ul className="space-y-4 text-sm">
          {interactions.map((interaction) => (
            <li key={interaction.id} className="border p-3 rounded bg-gray-50 flex justify-between items-center">
              <div>
                <p className="font-medium">{interaction.title}</p>
                <p className="text-xs text-gray-500">Saved on: {interaction.savedOn}</p>
              </div>
              <button
                onClick={() => handleDelete(interaction.id)}
                className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 text-xs"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-500">No saved interactions found.</div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect to backend for saved interactions management */}
      </div>
    </div>
  );
}
