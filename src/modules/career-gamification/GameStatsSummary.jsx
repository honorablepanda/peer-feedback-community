import React, { useState, useEffect } from 'react';

// Dummy game stats data
const dummyGameStats = {
  totalPoints: 1500,
  currentLevel: 5,
  challengesCompleted: 12,
  badgesEarned: 8,
};

export default function GameStatsSummary() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate backend API fetch
    setTimeout(() => {
      setStats(dummyGameStats);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend API call (e.g., GET /api/gamification/stats)
  }, []);

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Game Stats Summary</h2>

      {loading ? (
        <div className="text-gray-500">Loading game stats...</div>
      ) : stats ? (
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="p-3 border rounded bg-gray-50">
            <p className="font-medium">Total Points:</p>
            <p>{stats.totalPoints}</p>
          </div>
          <div className="p-3 border rounded bg-gray-50">
            <p className="font-medium">Current Level:</p>
            <p>{stats.currentLevel}</p>
          </div>
          <div className="p-3 border rounded bg-gray-50">
            <p className="font-medium">Challenges Completed:</p>
            <p>{stats.challengesCompleted}</p>
          </div>
          <div className="p-3 border rounded bg-gray-50">
            <p className="font-medium">Badges Earned:</p>
            <p>{stats.badgesEarned}</p>
          </div>
        </div>
      ) : (
        <div className="text-gray-500">No game stats available.</div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect this stats summary to backend gamification stats API */}
      </div>
    </div>
  );
}
