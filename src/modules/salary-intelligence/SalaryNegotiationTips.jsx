import React, { useState, useEffect } from 'react';

// Dummy salary negotiation tips
const dummyNegotiationTips = [
  'Research the average market salary for your role and location.',
  'Practice delivering your expected salary range confidently.',
  'Highlight your unique skills and contributions during discussions.',
  'Be prepared to negotiate benefits in addition to base salary.',
  'Always get the final offer in writing before making decisions.',
];

export default function SalaryNegotiationTips() {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching tips from backend or AI engine
    setTimeout(() => {
      setTips(dummyNegotiationTips);
      setLoading(false);
    }, 800);

    // TODO: Replace with backend API call (e.g., GET /api/salary/negotiation-tips)
  }, []);

  return (
    <div className="p-6 border rounded shadow-md bg-blue-50">
      <h2 className="text-xl font-semibold mb-4">AI-Powered Salary Negotiation Tips</h2>

      {loading ? (
        <div className="text-gray-500">Loading negotiation tips...</div>
      ) : (
        <ul className="list-disc pl-5 text-sm space-y-2">
          {tips.map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace with dynamic AI-generated negotiation tips from backend */}
      </div>
    </div>
  );
}
