import React, { useState, useEffect } from 'react';

// Dummy rewards data
const dummyRewards = [
  {
    id: 1,
    title: 'LinkedIn Profile Review',
    pointsRequired: 150,
    description: 'Get a professional review of your LinkedIn profile.',
  },
  {
    id: 2,
    title: 'Resume Feedback Session',
    pointsRequired: 200,
    description: 'One-on-one session for resume review and improvements.',
  },
  {
    id: 3,
    title: 'Mock Interview Coaching',
    pointsRequired: 300,
    description: 'Participate in a mock interview with feedback from a coach.',
  },
];

export default function RewardStore() {
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch for rewards
    setTimeout(() => {
      setRewards(dummyRewards);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend API call (e.g., GET /api/gamification/rewards)
  }, []);

  const handleRedeem = (rewardId) => {
    alert(`Reward ${rewardId} redeemed!`);
    // TODO: Send redeem request to backend API (e.g., POST /api/gamification/rewards/redeem)
  };

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Reward Store</h2>

      {loading ? (
        <div className="text-gray-500">Loading rewards...</div>
      ) : rewards.length > 0 ? (
        <ul className="space-y-4 text-sm">
          {rewards.map((reward) => (
            <li key={reward.id} className="border p-3 rounded bg-gray-50">
              <p className="font-medium text-lg">{reward.title}</p>
              <p className="text-gray-600">{reward.description}</p>
              <p className="text-xs text-gray-500 mb-2">Points Required: {reward.pointsRequired}</p>
              <button
                onClick={() => handleRedeem(reward.id)}
                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-xs"
              >
                Redeem
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-500">No rewards available at the moment.</div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Wire reward redemption and fetching to backend */}
      </div>
    </div>
  );
}
