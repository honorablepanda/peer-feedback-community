import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Dummy salary comparison data
const dummySalaryData = [
  { role: 'Software Engineer', userSalary: 95000, marketAverage: 105000 },
  { role: 'Product Manager', userSalary: 110000, marketAverage: 120000 },
  { role: 'Data Analyst', userSalary: 80000, marketAverage: 85000 },
  { role: 'UX Designer', userSalary: 90000, marketAverage: 95000 },
];

export default function SalaryComparisonChart() {
  const [salaryData, setSalaryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setSalaryData(dummySalaryData);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend API call (e.g., GET /api/salary/comparison)
  }, []);

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Your Salary vs Market Average</h2>

      {loading ? (
        <div className="text-gray-500">Loading salary comparison data...</div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salaryData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="role" />
            <YAxis />
            <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
            <Legend />
            <Bar dataKey="userSalary" fill="#3B82F6" name="Your Salary" />
            <Bar dataKey="marketAverage" fill="#FBBF24" name="Market Average" />
          </BarChart>
        </ResponsiveContainer>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect to backend API for real salary comparison data */}
      </div>
    </div>
  );
}
