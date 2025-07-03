
import React, { useState, useEffect } from 'react';

// Dummy audience targeting tips
const dummyAudienceTips = [
  'Consider addressing mid-career professionals in tech.',
  'Mention challenges common for entry-level job seekers.',
  'Tailor your language for hiring managers or recruiters.',
  'Highlight industry-specific keywords for better reach.',
];

export default function AudienceTargetingHelper({ content }) {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (content.trim()) {
      setLoading(true);
      // Simulate AI suggestion load
      setTimeout(() => {
        setTips(dummyAudienceTips);
        setLoading(false);
      }, 800);
    } else {
      setTips([]);
      setLoading(false);
    }
  }, [content]);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold mb-3">Audience Targeting Helper</h2>

      {loading ? (
        <p>Analyzing audience alignment...</p>
      ) : tips.length === 0 ? (
        <p>Enter content above to get audience targeting suggestions.</p>
      ) : (
        <ul className="list-disc pl-5 text-sm space-y-2">
          {tips.map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace with real audience targeting AI API later */}
      </div>
    </div>
  );
}
