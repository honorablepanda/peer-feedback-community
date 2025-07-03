import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

// Dummy skill progress data over time
const dummyProgressData = [
  { month: 'Jan', skillPoints: 10 },
  { month: 'Feb', skillPoints: 20 },
  { month: 'Mar', skillPoints: 35 },
  { month: 'Apr', skillPoints: 50 },
  { month: 'May', skillPoints: 65 },
  { month: 'Jun', skillPoints: 80 },
];

export default function SkillProgressTracker() {
  const [progressData, setProgressData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching progress data
    setTimeout(() => {
      setProgressData(dummyProgressData);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend API call (e.g., GET /api/skills/progress-tracker)
  }, []);

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Skill Progress Tracker</h2>

      {loading ? (
        <div className="text-gray-500">Loading skill progress chart...</div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={progressData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis allowDecimals={false} label={{ value: 'Skill Points', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="skillPoints" stroke="#10B981" strokeWidth={3} name="Skill Points" />
          </LineChart>
        </ResponsiveContainer>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect to backend API for user's actual skill progress over time */}
      </div>
    </div>
  );
}
