import React, { useState, useEffect } from 'react';

// Dummy badges data
const dummyBadges = [
  { id: 1, title: 'First Job Application', description: 'Submitted your first application.' },
  { id: 2, title: 'Profile Completion', description: 'Completed your career profile.' },
  { id: 3, title: 'Networking Pro', description: 'Connected with 5 recruiters.' },
];

export default function ProgressBadges() {
  const [badges, setBadges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate backend API call
    setTimeout(() => {
      setBadges(dummyBadges);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend API call (e.g., GET /api/gamification/badges)
  }, []);

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Progress Badges</h2>

      {loading ? (
        <div className="text-gray-500">Loading badges...</div>
      ) : badges.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {badges.map((badge) => (
            <div key={badge.id} className="border p-3 rounded bg-yellow-50 shadow-sm">
              <p className="font-medium">{badge.title}</p>
              <p className="text-gray-600 text-sm">{badge.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-500">No badges earned yet.</div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect to backend badge retrieval API */}
      </div>
    </div>
  );
}
