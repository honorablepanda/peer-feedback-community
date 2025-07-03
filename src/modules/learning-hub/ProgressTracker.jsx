import React, { useState, useEffect } from 'react';

// Dummy learning progress data
const dummyProgressData = [
  { id: 1, courseTitle: 'Advanced React Development', progressPercent: 50 },
  { id: 2, courseTitle: 'Node.js Backend Fundamentals', progressPercent: 30 },
  { id: 3, courseTitle: 'Data Visualization with D3.js', progressPercent: 70 },
];

export default function ProgressTracker() {
  const [progressData, setProgressData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate backend API fetch
    setTimeout(() => {
      setProgressData(dummyProgressData);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend API call (e.g., GET /api/learning/progress)
  }, []);

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Learning Progress Tracker</h2>

      {loading ? (
        <div className="text-gray-500">Loading your progress...</div>
      ) : progressData.length > 0 ? (
        <ul className="space-y-4 text-sm">
          {progressData.map((course) => (
            <li key={course.id} className="border p-3 rounded bg-gray-50">
              <p className="font-medium mb-2">{course.courseTitle}</p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-green-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${course.progressPercent}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">{course.progressPercent}% complete</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-500">No progress data available.</div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect progress tracker to backend learning progress API */}
      </div>
    </div>
  );
}
