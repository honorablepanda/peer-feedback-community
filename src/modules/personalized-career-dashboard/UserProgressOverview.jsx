
import React, { useState, useEffect } from 'react';

// Dummy module progress data
const dummyProgress = [
  { module: 'Resume Builder', completion: '100%' },
  { module: 'Job Finder Pro', completion: '75%' },
  { module: 'Network Assistant', completion: '50%' },
  { module: 'Mock Interview Simulator', completion: '30%' },
];

export default function UserProgressOverview() {
  const [progressData, setProgressData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setProgressData(dummyProgress);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-lg font-semibold mb-3">Your Progress Overview</h2>

      {loading ? (
        <p>Loading progress data...</p>
      ) : (
        <ul className="space-y-2 text-sm">
          {progressData.map((item, idx) => (
            <li key={idx} className="flex justify-between">
              <span>{item.module}</span>
              <span className="font-medium">{item.completion}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace with backend user progress API later */}
      </div>
    </div>
  );
}
