
import React, { useState, useEffect } from 'react';

// Dummy social media copywriting tips
const dummyTips = [
  'Start with a hook that grabs attention.',
  'Keep sentences short and impactful.',
  'Use active voice and power words.',
  'End with a clear call to action.',
  'Use whitespace and formatting for easy reading.',
];

export default function SocialTipsSidebar() {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setTips(dummyTips);
      setLoading(false);
    }, 600);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-blue-50 mt-6 w-72">
      <h3 className="text-lg font-semibold mb-3">Social Copywriting Tips</h3>

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
        {/* TODO: Optionally replace with backend-driven dynamic tips */}
      </div>
    </div>
  );
}
