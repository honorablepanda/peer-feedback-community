
import React, { useState, useEffect } from 'react';

// Dummy AI response examples
const dummyExamples = [
  'Example 1: In my previous role, I led a project where...',
  'Example 2: One time I demonstrated leadership was when...',
  'Example 3: I took initiative during a critical deadline by...',
];

export default function AIResponseExamples({ question }) {
  const [examples, setExamples] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (question.trim()) {
      setLoading(true);
      // Simulate API fetch
      setTimeout(() => {
        setExamples(dummyExamples);
        setLoading(false);
      }, 800);
    } else {
      setExamples([]);
      setLoading(false);
    }
  }, [question]);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-lg font-semibold mb-3">Sample AI Responses</h2>

      {loading ? (
        <p>Loading example answers...</p>
      ) : examples.length === 0 ? (
        <p>No examples available for this question.</p>
      ) : (
        <ul className="list-disc pl-5 text-sm space-y-2">
          {examples.map((example, idx) => (
            <li key={idx}>{example}</li>
          ))}
        </ul>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace with backend AI response examples later */}
      </div>
    </div>
  );
}
