import React, { useState, useEffect } from 'react';

// Dummy achievements data
const dummyAchievements = [
  { id: 1, title: 'First Application Sent', description: 'Submitted your first job application.', dateEarned: '2025-06-20' },
  { id: 2, title: 'Profile Completion', description: 'Completed your career profile.', dateEarned: '2025-06-22' },
  { id: 3, title: '5 Challenges Completed', description: 'Completed 5 career challenges.', dateEarned: '2025-06-25' },
];

export default function UserAchievementsPanel() {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching achievements
    setTimeout(() => {
      setAchievements(dummyAchievements);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend API call (e.g., GET /api/gamification/achievements)
  }, []);

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Your Achievements</h2>

      {loading ? (
        <div className="text-gray-500">Loading achievements...</div>
      ) : achievements.length > 0 ? (
        <ul className="space-y-4 text-sm">
          {achievements.map((achievement) => (
            <li key={achievement.id} className="border p-3 rounded bg-gray-50">
              <p className="font-medium">{achievement.title}</p>
              <p className="text-gray-600">{achievement.description}</p>
              <p className="text-xs text-gray-500">Earned on: {achievement.dateEarned}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-500">No achievements unlocked yet.</div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect to backend achievements API */}
      </div>
    </div>
  );
}
