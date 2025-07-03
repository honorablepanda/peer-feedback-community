
import React, { useState, useEffect } from 'react';

// Dummy trending topics data
const dummyTrends = [
  { id: 1, topic: 'Resume Formatting Tips', mentions: 25 },
  { id: 2, topic: 'STAR Story Examples', mentions: 18 },
  { id: 3, topic: 'LinkedIn Headline Feedback', mentions: 15 },
];

export default function CommunityTrendsOverview() {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setTrends(dummyTrends);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold mb-3">Community Trends This Week</h2>

      {loading ? (
        <p>Loading trending topics...</p>
      ) : trends.length === 0 ? (
        <p>No trending topics found.</p>
      ) : (
        <ul className="space-y-2">
          {trends.map(trend => (
            <li key={trend.id} className="border p-2 rounded bg-gray-50">
              <p className="font-medium">{trend.topic}</p>
              <p className="text-xs text-gray-500">{trend.mentions} mentions this week</p>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace with backend-generated trend analysis later */}
        Based on recent community activity.
      </div>
    </div>
  );
}
