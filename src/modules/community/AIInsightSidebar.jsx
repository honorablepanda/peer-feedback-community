
import React, { useState, useEffect } from 'react';

// Dummy AI insight data
const dummyInsights = [
  'Your comments show a high level of constructiveness.',
  'Peers respond more to comments with specific suggestions.',
  'Adding examples improves engagement by 25%.',
];

export default function AIInsightSidebar() {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate AI insight fetch delay
    setTimeout(() => {
      setInsights(dummyInsights);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6 w-72">
      <h3 className="text-lg font-semibold mb-3">AI Feedback Insights</h3>

      {loading ? (
        <p>Loading AI insights...</p>
      ) : (
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
          {insights.map((insight, index) => (
            <li key={index}>{insight}</li>
          ))}
        </ul>
      )}

      <div className="mt-4 text-xs text-gray-500">
        {/* TODO: Replace with real AI API integration later */}
        AI-generated feedback tips
      </div>
    </div>
  );
}
