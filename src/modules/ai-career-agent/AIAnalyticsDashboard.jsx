import React, { useState, useEffect } from 'react';

// Dummy AI usage analytics data
const dummyAnalytics = {
  totalInteractions: 35,
  mostFrequentTopic: 'Resume Feedback',
  lastInteractionDate: '2025-06-25',
  averageResponseTime: '2.3 seconds',
};

export default function AIAnalyticsDashboard() {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate backend API fetch
    setTimeout(() => {
      setAnalytics(dummyAnalytics);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend API call (e.g., GET /api/ai-career-agent/analytics)
  }, []);

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">AI Usage Analytics</h2>

      {loading ? (
        <div className="text-gray-500">Loading AI usage analytics...</div>
      ) : analytics ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="p-3 border rounded bg-gray-50">
            <p className="font-medium">Total Interactions:</p>
            <p>{analytics.totalInteractions}</p>
          </div>
          <div className="p-3 border rounded bg-gray-50">
            <p className="font-medium">Most Frequent Topic:</p>
            <p>{analytics.mostFrequentTopic}</p>
          </div>
          <div className="p-3 border rounded bg-gray-50">
            <p className="font-medium">Last Interaction Date:</p>
            <p>{analytics.lastInteractionDate}</p>
          </div>
          <div className="p-3 border rounded bg-gray-50">
            <p className="font-medium">Avg AI Response Time:</p>
            <p>{analytics.averageResponseTime}</p>
          </div>
        </div>
      ) : (
        <div className="text-gray-500">No analytics data available.</div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Integrate real AI usage analytics from backend */}
      </div>
    </div>
  );
}
