import React, { useState, useEffect } from 'react';

// Dummy AI-generated challenge recommendations
const dummyAIRecommendations = [
  'Complete 3 new job applications this week to increase your job visibility.',
  'Enhance your LinkedIn profile and earn the "Profile Optimizer" badge.',
  'Network with at least 2 industry professionals to unlock bonus points.',
];

export default function AIChallengeRecommendations() {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate backend AI recommendation fetch
    setTimeout(() => {
      setRecommendations(dummyAIRecommendations);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend AI API call (e.g., GET /api/gamification/ai-challenge-recommendations)
  }, []);

  return (
    <div className="p-6 border rounded shadow-md bg-purple-50">
      <h2 className="text-xl font-semibold mb-4">AI Challenge Recommendations</h2>

      {loading ? (
        <div className="text-gray-500">Generating AI challenge recommendations...</div>
      ) : recommendations.length > 0 ? (
        <ul className="list-disc pl-5 space-y-2 text-sm">
          {recommendations.map((rec, idx) => (
            <li key={idx}>{rec}</li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-500">No recommendations available right now.</div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Integrate real-time AI-driven challenge recommendations from backend */}
      </div>
    </div>
  );
}
