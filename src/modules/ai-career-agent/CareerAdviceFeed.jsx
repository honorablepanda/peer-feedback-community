import React, { useState, useEffect } from 'react';

// Dummy AI-generated career advice feed
const dummyAdviceFeed = [
  'Consider expanding your network by connecting with professionals on LinkedIn.',
  'Tailor your resume for each job application to increase callback rates.',
  'Enroll in a leadership course to strengthen your management skills.',
  'Prepare a personal elevator pitch for networking events.',
];

export default function CareerAdviceFeed() {
  const [advice, setAdvice] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate backend AI API fetch
    setTimeout(() => {
      setAdvice(dummyAdviceFeed);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend API call (e.g., GET /api/ai-career-agent/advice-feed)
  }, []);

  return (
    <div className="p-6 border rounded shadow-md bg-purple-50">
      <h2 className="text-xl font-semibold mb-4">AI Career Advice Feed</h2>

      {loading ? (
        <div className="text-gray-500">Loading career advice...</div>
      ) : advice.length > 0 ? (
        <ul className="list-disc pl-5 space-y-2 text-sm">
          {advice.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-500">No advice available at the moment.</div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Fetch AI-driven career advice from backend */}
      </div>
    </div>
  );
}
