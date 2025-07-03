import React, { useState, useEffect } from 'react';

// Dummy learning history data
const dummyHistory = [
  {
    id: 1,
    courseTitle: 'Advanced React Development',
    status: 'Completed',
    completionDate: '2025-06-15',
  },
  {
    id: 2,
    courseTitle: 'Node.js Backend Fundamentals',
    status: 'In Progress',
    completionDate: null,
  },
  {
    id: 3,
    courseTitle: 'Data Visualization with D3.js',
    status: 'Completed',
    completionDate: '2025-06-22',
  },
];

export default function LearningHistory() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate backend API fetch
    setTimeout(() => {
      setHistory(dummyHistory);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend API call (e.g., GET /api/learning/history)
  }, []);

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Learning History</h2>

      {loading ? (
        <div className="text-gray-500">Loading your learning history...</div>
      ) : history.length > 0 ? (
        <ul className="space-y-4 text-sm">
          {history.map((item) => (
            <li key={item.id} className="border p-3 rounded bg-gray-50">
              <p className="font-medium">{item.courseTitle}</p>
              <p className="text-gray-600">Status: {item.status}</p>
              {item.status === 'Completed' && (
                <p className="text-xs text-gray-500">Completed on: {item.completionDate}</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-500">No learning history available.</div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect learning history list to backend API */}
      </div>
    </div>
  );
}
