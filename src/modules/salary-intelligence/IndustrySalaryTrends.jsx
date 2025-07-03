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

// Dummy salary trend data by industry over time
const dummyIndustryTrends = [
  { year: '2021', Software: 95000, Finance: 105000, Healthcare: 88000 },
  { year: '2022', Software: 100000, Finance: 110000, Healthcare: 90000 },
  { year: '2023', Software: 108000, Finance: 115000, Healthcare: 94000 },
  { year: '2024', Software: 115000, Finance: 120000, Healthcare: 98000 },
  { year: '2025', Software: 122000, Finance: 125000, Healthcare: 102000 },
];

export default function IndustrySalaryTrends() {
  const [trendData, setTrendData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setTrendData(dummyIndustryTrends);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend API call (e.g., GET /api/salary/industry-trends)
  }, []);

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Industry Salary Trends (Past 5 Years)</h2>

      {loading ? (
        <div className="text-gray-500">Loading industry salary trends...</div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trendData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
            <Legend />
            <Line type="monotone" dataKey="Software" stroke="#3B82F6" name="Software Industry" strokeWidth={2} />
            <Line type="monotone" dataKey="Finance" stroke="#F59E0B" name="Finance Industry" strokeWidth={2} />
            <Line type="monotone" dataKey="Healthcare" stroke="#10B981" name="Healthcare Industry" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace dummy trend data with backend-driven industry salary trends */}
      </div>
    </div>
  );
}
