import React, { useState, useEffect } from 'react';

// Dummy AI recommendations
const dummyAIRecommendations = [
  'Focus on improving TypeScript proficiency for better frontend roles.',
  'Consider completing an advanced React project to showcase skills.',
  'Enroll in a Node.js backend course to fill experience gaps.',
];

export default function AIRecommendationsWidget() {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching AI recommendations
    setTimeout(() => {
      setRecommendations(dummyAIRecommendations);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend API call (e.g., GET /api/skills/ai-recommendations)
  }, []);

  return (
    <div className="p-6 border rounded shadow-md bg-purple-50">
      <h2 className="text-xl font-semibold mb-4">AI Recommendations</h2>

      {loading ? (
        <div className="text-gray-500">Generating personalized AI tips...</div>
      ) : recommendations.length > 0 ? (
        <ul className="list-disc pl-5 space-y-2 text-sm">
          {recommendations.map((rec, idx) => (
            <li key={idx}>{rec}</li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-500">No AI recommendations available.</div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Integrate live AI-generated recommendations from backend */}
      </div>
    </div>
  );
}
