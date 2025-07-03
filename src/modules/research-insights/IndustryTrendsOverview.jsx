
import React, { useState, useEffect } from 'react';

// Dummy industry trends data
const dummyTrends = {
  industry: 'Software Development',
  topSkills: ['React.js', 'Node.js', 'AWS', 'Docker', 'GraphQL'],
  jobGrowthRate: '8% projected growth (2025-2030)',
  averageSalaryRange: '$85,000 - $130,000 USD',
};

export default function IndustryTrendsOverview() {
  const [trends, setTrends] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setTrends(dummyTrends);
      setLoading(false);
    }, 900);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold mb-3">Industry Trends Overview</h2>

      {loading ? (
        <p>Loading industry data...</p>
      ) : trends ? (
        <div className="space-y-2">
          <p><strong>Industry:</strong> {trends.industry}</p>
          <p><strong>Top Skills in Demand:</strong></p>
          <ul className="list-disc pl-5 text-sm">
            {trends.topSkills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
          <p><strong>Projected Job Growth:</strong> {trends.jobGrowthRate}</p>
          <p><strong>Average Salary Range:</strong> {trends.averageSalaryRange}</p>
        </div>
      ) : (
        <p>No trend data available.</p>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace with backend-driven industry insights later */}
      </div>
    </div>
  );
}
