
import React, { useState, useEffect } from 'react';

// Dummy leaderboard data
const dummyLeaderboard = [
  { id: 1, username: 'User123', points: 120 },
  { id: 2, username: 'CareerSeeker88', points: 110 },
  { id: 3, username: 'JobHunter42', points: 95 },
  { id: 4, username: 'AIHelper', points: 80 },
  { id: 5, username: 'PeerCoach99', points: 75 },
];

export default function CommunityLeaderboard() {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setLeaders(dummyLeaderboard);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold mb-3">Top Community Contributors</h2>

      {loading ? (
        <p>Loading leaderboard...</p>
      ) : (
        <ol className="list-decimal pl-5 space-y-2">
          {leaders.map(user => (
            <li key={user.id} className="border p-2 rounded bg-gray-50 flex justify-between">
              <span>{user.username}</span>
              <span className="font-semibold">{user.points} XP</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
