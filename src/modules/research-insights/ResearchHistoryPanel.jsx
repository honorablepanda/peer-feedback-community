
import React, { useState, useEffect } from 'react';

// Dummy research history data
const dummyHistory = [
  { id: 1, action: 'Searched for: TechCorp company news', date: '2025-06-25' },
  { id: 2, action: 'Viewed industry trends: Software Development', date: '2025-06-24' },
  { id: 3, action: 'Submitted custom query: AI job market in California', date: '2025-06-23' },
];

export default function ResearchHistoryPanel() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setHistory(dummyHistory);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold mb-3">Your Research History</h2>

      {loading ? (
        <p>Loading research history...</p>
      ) : history.length === 0 ? (
        <p>No research history found.</p>
      ) : (
        <ul className="space-y-3 text-sm">
          {history.map((entry) => (
            <li key={entry.id} className="border p-2 rounded bg-gray-50">
              <p>{entry.action}</p>
              <p className="text-xs text-gray-500">{entry.date}</p>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace with backend research history API later */}
      </div>
    </div>
  );
}
