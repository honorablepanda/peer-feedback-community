
import React, { useState, useEffect } from 'react';

// Dummy AI feedback
const dummyFeedback = [
  'Your answer clearly highlights your leadership skills.',
  'Consider adding a measurable outcome or result.',
  'Good use of the STAR framework structure.',
];

export default function AIImmediateFeedback({ answer }) {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (answer.trim()) {
      setLoading(true);
      // Simulate AI feedback generation delay
      setTimeout(() => {
        setFeedback(dummyFeedback);
        setLoading(false);
      }, 900);
    } else {
      setFeedback([]);
      setLoading(false);
    }
  }, [answer]);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-lg font-semibold mb-3">AI Immediate Feedback</h2>

      {loading ? (
        <p>Analyzing your answer...</p>
      ) : feedback.length === 0 ? (
        <p>Submit an answer above to get AI feedback.</p>
      ) : (
        <ul className="list-disc pl-5 text-sm space-y-2">
          {feedback.map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace with backend AI feedback API later */}
      </div>
    </div>
  );
}
