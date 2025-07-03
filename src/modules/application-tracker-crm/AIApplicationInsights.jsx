import React, { useState, useEffect } from 'react';

const dummyInsights = [
  "Your application success rate has improved by 15% this month.",
  "You've had better response rates for Software Engineer roles.",
  "Applications submitted on Tuesdays receive quicker replies.",
];

export default function AIApplicationInsights() {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setInsights(dummyInsights);
      setLoading(false);
    }, 1000);
    
    // TODO: Fetch real AI-generated insights from backend API
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-purple-50 mt-6">
      <h2 className="text-xl font-semibold mb-3">AI Application Insights</h2>

      {loading ? (
        <p className="text-gray-500">Loading AI insights...</p>
      ) : (
        <ul className="list-disc pl-5 text-sm space-y-2">
          {insights.map((insight, idx) => (
            <li key={idx}>{insight}</li>
          ))}
        </ul>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace dummy insights with backend-driven AI insights later */}
      </div>
    </div>
  );
}
