import React, { useState, useEffect } from 'react';

// Dummy leaderboard data
const dummyLeaderboard = [
  { id: 1, username: 'JaneDoe', points: 1200 },
  { id: 2, username: 'TechGuru', points: 1100 },
  { id: 3, username: 'CodeMaster', points: 1050 },
  { id: 4, username: 'CareerBuilder', points: 950 },
  { id: 5, username: 'JobHunter99', points: 900 },
];

export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate backend API call
    setTimeout(() => {
      // Sort leaderboard by points descending (just for demo)
      const sortedLeaders = [...dummyLeaderboard].sort((a, b) => b.points - a.points);
      setLeaders(sortedLeaders);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend API call (e.g., GET /api/gamification/leaderboard)
  }, []);

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>

      {loading ? (
        <div className="text-gray-500">Loading leaderboard...</div>
      ) : leaders.length > 0 ? (
        <ol className="list-decimal pl-5 space-y-2 text-sm">
          {leaders.map((user, idx) => (
            <li key={user.id} className="border p-2 rounded bg-gray-50 flex justify-between">
              <span>{user.username}</span>
              <span className="font-medium">{user.points} pts</span>
            </li>
          ))}
        </ol>
      ) : (
        <div className="text-gray-500">No leaderboard data available.</div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Fetch real leaderboard data from backend */}
      </div>
    </div>
  );
}
