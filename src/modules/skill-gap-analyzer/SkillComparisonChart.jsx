import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

// Dummy comparison data: user's skill vs industry average
const dummyChartData = [
  { skill: 'JavaScript', userLevel: 4, industryAverage: 3 },
  { skill: 'React', userLevel: 3, industryAverage: 4 },
  { skill: 'TypeScript', userLevel: 1, industryAverage: 3 },
  { skill: 'Node.js', userLevel: 2, industryAverage: 3 },
];

export default function SkillComparisonChart() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call delay
    setTimeout(() => {
      setChartData(dummyChartData);
      setLoading(false);
    }, 1000);

    // TODO: Replace with real backend API (e.g., GET /api/skills/compare-to-industry)
  }, []);

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Skill Comparison: You vs Industry Average</h2>

      {loading ? (
        <div className="text-gray-500">Loading skill comparison chart...</div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="skill" />
            <YAxis allowDecimals={false} label={{ value: 'Proficiency Level', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="userLevel" fill="#3B82F6" name="Your Level" />
            <Bar dataKey="industryAverage" fill="#FBBF24" name="Industry Avg" />
          </BarChart>
        </ResponsiveContainer>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect to backend API for real-time user vs industry skill benchmarks */}
      </div>
    </div>
  );
}
