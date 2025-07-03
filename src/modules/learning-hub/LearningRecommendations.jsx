import React, { useState, useEffect } from 'react';

// Dummy learning recommendations
const dummyRecommendations = [
  {
    id: 1,
    title: 'Mastering TypeScript',
    description: 'Advance your TypeScript skills to build scalable frontend applications.',
    provider: 'Udemy',
  },
  {
    id: 2,
    title: 'Advanced Node.js',
    description: 'Learn how to build production-ready Node.js backend services.',
    provider: 'Coursera',
  },
  {
    id: 3,
    title: 'Responsive UI Design',
    description: 'Understand advanced techniques for building responsive UIs with Tailwind CSS.',
    provider: 'Pluralsight',
  },
];

export default function LearningRecommendations() {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate backend fetch
    setTimeout(() => {
      setRecommendations(dummyRecommendations);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend API call (e.g., GET /api/learning/recommendations)
  }, []);

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Learning Recommendations</h2>

      {loading ? (
        <div className="text-gray-500">Loading recommended courses...</div>
      ) : recommendations.length > 0 ? (
        <ul className="space-y-4 text-sm">
          {recommendations.map((rec) => (
            <li key={rec.id} className="border p-3 rounded bg-gray-50">
              <p className="font-medium text-lg">{rec.title}</p>
              <p className="text-gray-600">{rec.description}</p>
              <p className="text-xs text-gray-500">Provider: {rec.provider}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-500">No learning recommendations at this time.</div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Integrate personalized learning recommendations from backend */}
      </div>
    </div>
  );
}
