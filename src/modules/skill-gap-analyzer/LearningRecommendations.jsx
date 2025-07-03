import React, { useState, useEffect } from 'react';

const dummyRecommendations = [
  {
    title: 'Mastering TypeScript - 2025 Edition',
    type: 'Online Course',
    provider: 'Udemy',
    link: 'https://udemy.com/typescript-master',
  },
  {
    title: 'Node.js Advanced Concepts',
    type: 'Article',
    provider: 'Medium',
    link: 'https://medium.com/nodejs-advanced',
  },
  {
    title: 'Docker & Kubernetes: The Practical Guide',
    type: 'Video Series',
    provider: 'Pluralsight',
    link: 'https://pluralsight.com/docker-kubernetes',
  },
];

export default function LearningRecommendations() {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate backend API fetch
    setTimeout(() => {
      setRecommendations(dummyRecommendations);
      setLoading(false);
    }, 1000);

    // TODO: Replace with real API call (e.g., GET /api/learning/recommendations)
  }, []);

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Personalized Learning Recommendations</h2>

      {loading ? (
        <div className="text-gray-500">Fetching recommendations tailored for you...</div>
      ) : recommendations.length > 0 ? (
        <ul className="space-y-4">
          {recommendations.map((rec, idx) => (
            <li key={idx} className="p-4 border rounded bg-gray-50">
              <h3 className="text-lg font-semibold">{rec.title}</h3>
              <p className="text-sm text-gray-600">
                Type: {rec.type} | Provider: {rec.provider}
              </p>
              <a
                href={rec.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-600 hover:underline text-sm"
              >
                View Resource →
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-500">No recommendations available at this moment.</div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Integrate with backend for dynamically fetched learning recommendations */}
      </div>
    </div>
  );
}
