
import React, { useState, useEffect } from 'react';

// Dummy gamification data
const dummyGamification = {
  currentXP: 450,
  nextLevelXP: 500,
  badges: ['Helpful Reviewer', 'Top Commenter', 'Engagement Streak'],
};

export default function FeedbackGamificationBanner() {
  const [gamification, setGamification] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setGamification(dummyGamification);
      setLoading(false);
    }, 800);
  }, []);

  const progressPercentage = gamification
    ? Math.min((gamification.currentXP / gamification.nextLevelXP) * 100, 100)
    : 0;

  return (
    <div className="p-4 border rounded shadow-md bg-yellow-50 mt-6">
      <h2 className="text-xl font-semibold mb-3">Your Feedback XP Progress</h2>

      {loading ? (
        <p>Loading gamification data...</p>
      ) : gamification ? (
        <div className="space-y-3">
          <div className="relative w-full bg-gray-200 rounded h-4">
            <div
              className="bg-yellow-500 h-4 rounded"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-700">
            {gamification.currentXP} XP / {gamification.nextLevelXP} XP
          </p>

          <div>
            <p className="font-semibold">Badges Earned:</p>
            <ul className="list-disc pl-5 text-sm">
              {gamification.badges.map((badge, idx) => (
                <li key={idx}>{badge}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>No gamification data available.</p>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Sync XP and badges with backend later */}
        Progress and badges from your feedback activity.
      </div>
    </div>
  );
}
