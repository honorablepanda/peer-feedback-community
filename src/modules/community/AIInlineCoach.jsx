
import React, { useState, useEffect } from 'react';

// Dummy AI inline coaching tips
const dummyTips = [
  'Tip: Start with something positive before suggesting improvements.',
  'Tip: Be specific about what could be improved.',
  'Tip: Use action-oriented language for clearer suggestions.',
];

export default function AIInlineCoach() {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching AI suggestions
    setTimeout(() => {
      setTips(dummyTips);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-blue-50 mt-6 w-72">
      <h3 className="text-lg font-semibold mb-3">AI Inline Coach</h3>

      {loading ? (
        <p>Loading tips...</p>
      ) : (
        <ul className="list-disc pl-5 text-sm space-y-2">
          {tips.map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect to live AI feedback generator later */}
        AI-powered suggestions based on your typing context.
      </div>
    </div>
  );
}
