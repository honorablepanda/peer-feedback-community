import React, { useState, useEffect } from 'react';

// Dummy AI compensation insights
const dummyInsights = [
  'Your current salary is 10% below the industry average for your role and location.',
  'AI suggests targeting companies offering higher compensation for Software Engineers.',
  'Your years of experience align with mid-level positions in your field.',
  'Consider upskilling in cloud technologies to increase earning potential.',
];

export default function AICompensationInsights() {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API/AI engine call
    setTimeout(() => {
      setInsights(dummyInsights);
      setLoading(false);
    }, 1000);

    // TODO: Replace with real backend API call (e.g., GET /api/salary/ai-insights)
  }, []);

  return (
    <div className="p-6 border rounded shadow-md bg-purple-50">
      <h2 className="text-xl font-semibold mb-4">AI Compensation Insights</h2>

      {loading ? (
        <div className="text-gray-500">Analyzing your compensation data...</div>
      ) : (
        <ul className="list-disc pl-5 text-sm space-y-2">
          {insights.map((insight, idx) => (
            <li key={idx}>{insight}</li>
          ))}
        </ul>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Integrate with backend AI-driven compensation insights API */}
      </div>
    </div>
  );
}
