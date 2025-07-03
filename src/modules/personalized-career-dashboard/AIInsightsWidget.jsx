
import React, { useState, useEffect } from 'react';

// Dummy AI insights
const dummyInsights = [
  'Your LinkedIn profile visibility has increased by 15% this week.',
  'AI suggests focusing on tailoring your cover letters for upcoming applications.',
  'Based on your recent activity, practicing STAR interview questions is recommended.',
];

export default function AIInsightsWidget() {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API load
    setTimeout(() => {
      setInsights(dummyInsights);
      setLoading(false);
    }, 600);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-blue-50 mt-6">
      <h2 className="text-lg font-semibold mb-3">AI Career Insights</h2>

      {loading ? (
        <p>Generating insights...</p>
      ) : (
        <ul className="list-disc pl-5 text-sm space-y-2">
          {insights.map((insight, idx) => (
            <li key={idx}>{insight}</li>
          ))}
        </ul>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace with real AI insights feed later */}
      </div>
    </div>
  );
}
