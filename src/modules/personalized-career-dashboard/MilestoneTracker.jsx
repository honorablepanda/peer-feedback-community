
import React, { useState, useEffect } from 'react';

// Dummy milestones
const dummyMilestones = [
  { id: 1, milestone: 'Completed Resume Builder', date: '2025-06-15' },
  { id: 2, milestone: 'Applied to First Job', date: '2025-06-18' },
  { id: 3, milestone: 'Completed First Mock Interview', date: '2025-06-22' },
];

export default function MilestoneTracker() {
  const [milestones, setMilestones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API load
    setTimeout(() => {
      setMilestones(dummyMilestones);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-lg font-semibold mb-3">Milestone Tracker</h2>

      {loading ? (
        <p>Loading milestones...</p>
      ) : milestones.length === 0 ? (
        <p>No milestones achieved yet.</p>
      ) : (
        <ul className="space-y-2 text-sm">
          {milestones.map((item) => (
            <li key={item.id} className="border p-2 rounded bg-gray-50">
              <p>{item.milestone}</p>
              <p className="text-xs text-gray-500">Date: {item.date}</p>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect to backend milestones service later */}
      </div>
    </div>
  );
}
