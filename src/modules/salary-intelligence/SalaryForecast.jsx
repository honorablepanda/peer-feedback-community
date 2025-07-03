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

// Dummy salary forecast data
const dummyForecastData = [
  { year: '2025', projectedSalary: 95000 },
  { year: '2026', projectedSalary: 99000 },
  { year: '2027', projectedSalary: 103000 },
  { year: '2028', projectedSalary: 107500 },
  { year: '2029', projectedSalary: 112000 },
];

export default function SalaryForecast() {
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate backend API fetch
    setTimeout(() => {
      setForecastData(dummyForecastData);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend API call (e.g., GET /api/salary/forecast)
  }, []);

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Salary Forecast (Next 5 Years)</h2>

      {loading ? (
        <div className="text-gray-500">Loading salary forecast...</div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={forecastData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
            <Legend />
            <Line type="monotone" dataKey="projectedSalary" stroke="#3B82F6" name="Projected Salary" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect to backend salary forecasting API */}
      </div>
    </div>
  );
}
