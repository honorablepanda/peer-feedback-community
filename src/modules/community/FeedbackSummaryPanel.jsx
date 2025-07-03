
import React, { useState, useEffect } from 'react';

// Dummy feedback summary data
const dummySummary = {
  totalFeedback: 25,
  positivePercentage: 80,
  mostCommonTheme: 'Clarity and Structure',
  recentHighlight: 'Your STAR story improvements received 10 likes this week.',
};

export default function FeedbackSummaryPanel() {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate backend fetch delay
    setTimeout(() => {
      setSummary(dummySummary);
      setLoading(false);
    }, 900);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold mb-3">Your Feedback Summary</h2>

      {loading ? (
        <p>Loading summary...</p>
      ) : summary ? (
        <div className="space-y-2">
          <p><strong>Total Feedback Given:</strong> {summary.totalFeedback}</p>
          <p><strong>Positive Feedback Rate:</strong> {summary.positivePercentage}%</p>
          <p><strong>Most Common Theme:</strong> {summary.mostCommonTheme}</p>
          <p><strong>Recent Highlight:</strong> {summary.recentHighlight}</p>
        </div>
      ) : (
        <p>No feedback summary available.</p>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace with real backend API data later */}
        Summary based on your recent feedback activity.
      </div>
    </div>
  );
}
