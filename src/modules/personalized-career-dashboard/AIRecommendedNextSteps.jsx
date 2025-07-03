
import React, { useState, useEffect } from 'react';

// Dummy AI next steps
const dummyNextSteps = [
  'Tailor your resume for 2 more job openings.',
  'Practice 3 behavioral interview questions.',
  'Update your LinkedIn headline to reflect your target role.',
  'Send 2 networking outreach messages this week.',
];

export default function AIRecommendedNextSteps() {
  const [nextSteps, setNextSteps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate AI API load
    setTimeout(() => {
      setNextSteps(dummyNextSteps);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-green-50 mt-6">
      <h2 className="text-lg font-semibold mb-3">AI Recommended Next Steps</h2>

      {loading ? (
        <p>Generating personalized recommendations...</p>
      ) : (
        <ul className="list-disc pl-5 text-sm space-y-2">
          {nextSteps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ul>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace with backend AI recommendation engine later */}
      </div>
    </div>
  );
}
