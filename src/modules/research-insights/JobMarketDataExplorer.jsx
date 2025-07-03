
import React, { useState, useEffect } from 'react';

// Dummy job market data
const dummyData = [
  { jobTitle: 'Software Engineer', openings: 1200, avgSalary: '$110,000' },
  { jobTitle: 'Data Scientist', openings: 800, avgSalary: '$115,000' },
  { jobTitle: 'Product Manager', openings: 500, avgSalary: '$105,000' },
];

export default function JobMarketDataExplorer() {
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetch
    setTimeout(() => {
      setMarketData(dummyData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold mb-3">Job Market Data Explorer</h2>

      {loading ? (
        <p>Loading job market data...</p>
      ) : (
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className="border px-2 py-1 text-left">Job Title</th>
              <th className="border px-2 py-1 text-left">Openings</th>
              <th className="border px-2 py-1 text-left">Avg Salary</th>
            </tr>
          </thead>
          <tbody>
            {marketData.map((job, idx) => (
              <tr key={idx}>
                <td className="border px-2 py-1">{job.jobTitle}</td>
                <td className="border px-2 py-1">{job.openings}</td>
                <td className="border px-2 py-1">{job.avgSalary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace with backend-driven job market data later */}
      </div>
    </div>
  );
}
