
import React, { useState, useEffect } from 'react';

// Dummy AI generation history
const dummyHistory = [
  { id: 1, type: 'LinkedIn Post', date: '2025-06-25', preview: 'Boost your profile visibility...' },
  { id: 2, type: 'Resume Bullet', date: '2025-06-24', preview: 'Led a cross-functional team to...' },
  { id: 3, type: 'STAR Story', date: '2025-06-23', preview: 'Situation: Faced with a tight deadline...' },
];

export default function HistoryPanel() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading
    setTimeout(() => {
      setHistory(dummyHistory);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-lg font-semibold mb-3">Recent AI Generations</h2>

      {loading ? (
        <p>Loading history...</p>
      ) : history.length === 0 ? (
        <p>No past generations found.</p>
      ) : (
        <ul className="space-y-2 text-sm">
          {history.map((entry) => (
            <li key={entry.id} className="border p-2 rounded bg-gray-50">
              <p><strong>{entry.type}</strong> — {entry.date}</p>
              <p className="text-gray-600">"{entry.preview}"</p>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace with real backend history fetch later */}
        Showing local dummy history.
      </div>
    </div>
  );
}
