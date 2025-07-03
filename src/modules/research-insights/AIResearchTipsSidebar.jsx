
import React, { useState, useEffect } from 'react';

// Dummy AI research tips
const dummyTips = [
  'When researching companies, check both news and employee reviews.',
  'For industry trends, focus on 12-month hiring patterns.',
  'Use LinkedIn job postings to gauge market demand.',
  'Track salary benchmarks across multiple sources.',
  'Use specific keywords when submitting research queries to AI.',
];

export default function AIResearchTipsSidebar() {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setTips(dummyTips);
      setLoading(false);
    }, 700);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-blue-50 mt-6 w-72">
      <h3 className="text-lg font-semibold mb-3">AI Research Tips</h3>

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
        {/* TODO: Optionally replace with backend-driven research tips later */}
      </div>
    </div>
  );
}
