
import React, { useState, useEffect } from 'react';

// Dummy saved goals
const dummyGoals = [
  { id: 1, goal: 'Get 3 interview invitations by August' },
  { id: 2, goal: 'Complete 5 networking calls this month' },
  { id: 3, goal: 'Tailor resume for 10 job applications' },
];

export default function SavedGoalsManager() {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setGoals(dummyGoals);
      setLoading(false);
    }, 700);
  }, []);

  const handleDelete = (id) => {
    setGoals(prev => prev.filter(goal => goal.id !== id));
  };

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-lg font-semibold mb-3">Saved Career Goals</h2>

      {loading ? (
        <p>Loading goals...</p>
      ) : goals.length === 0 ? (
        <p>No saved goals found.</p>
      ) : (
        <ul className="space-y-3 text-sm">
          {goals.map(goal => (
            <li key={goal.id} className="border p-2 rounded bg-gray-50 flex justify-between items-center">
              <span>{goal.goal}</span>
              <button
                onClick={() => handleDelete(goal.id)}
                className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 text-xs"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect to backend saved goals API later */}
      </div>
    </div>
  );
}
