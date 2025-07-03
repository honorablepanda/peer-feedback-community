
import React, { useState, useEffect } from 'react';

// Dummy dashboard usage tips
const dummyTips = [
  'Check your progress weekly to stay on track.',
  'Use AI Next Steps to prioritize your job search.',
  'Review milestones to celebrate wins.',
  'Save your career goals and revisit them often.',
  'Link directly to key modules using Quick Links.',
];

export default function CareerDashboardTipsSidebar() {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTips(dummyTips);
      setLoading(false);
    }, 600);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-blue-50 mt-6 w-72">
      <h3 className="text-lg font-semibold mb-3">Dashboard Tips</h3>

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
        {/* TODO: Replace with backend-driven tips later */}
      </div>
    </div>
  );
}
