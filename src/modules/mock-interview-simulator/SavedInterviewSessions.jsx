
import React, { useState, useEffect } from 'react';

// Dummy saved interview sessions
const dummySessions = [
  { id: 1, title: 'Leadership Practice Session', date: '2025-06-25' },
  { id: 2, title: 'Behavioral Questions Run', date: '2025-06-24' },
  { id: 3, title: 'Technical Interview Drill', date: '2025-06-23' },
];

export default function SavedInterviewSessions() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setSessions(dummySessions);
      setLoading(false);
    }, 900);
  }, []);

  const handleDelete = (id) => {
    setSessions(prev => prev.filter(session => session.id !== id));
  };

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold mb-3">Saved Interview Sessions</h2>

      {loading ? (
        <p>Loading saved sessions...</p>
      ) : sessions.length === 0 ? (
        <p>No saved sessions found.</p>
      ) : (
        <ul className="space-y-3 text-sm">
          {sessions.map(session => (
            <li key={session.id} className="border p-2 rounded bg-gray-50 flex justify-between items-center">
              <div>
                <p className="font-medium">{session.title}</p>
                <p className="text-xs text-gray-500">Date: {session.date}</p>
              </div>
              <button
                onClick={() => handleDelete(session.id)}
                className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 text-xs"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect to backend saved sessions API later */}
      </div>
    </div>
  );
}
