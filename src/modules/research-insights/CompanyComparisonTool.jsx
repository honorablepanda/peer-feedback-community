
import React, { useState, useEffect } from 'react';

// Dummy company comparison data
const dummyCompanies = [
  {
    id: 1,
    name: 'TechCorp Inc.',
    industry: 'Software',
    size: '5,000-10,000 employees',
    rating: '4.5/5 on Glassdoor',
  },
  {
    id: 2,
    name: 'InnovateX Solutions',
    industry: 'AI & Machine Learning',
    size: '1,000-5,000 employees',
    rating: '4.2/5 on Glassdoor',
  },
];

export default function CompanyComparisonTool() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API load
    setTimeout(() => {
      setCompanies(dummyCompanies);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-3">Company Comparison</h2>

      {loading ? (
        <p>Loading company comparison...</p>
      ) : (
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className="border px-2 py-1 text-left">Attribute</th>
              {companies.map((company) => (
                <th key={company.id} className="border px-2 py-1 text-left">{company.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1 font-medium">Industry</td>
              {companies.map((c) => <td key={c.id} className="border px-2 py-1">{c.industry}</td>)}
            </tr>
            <tr>
              <td className="border px-2 py-1 font-medium">Size</td>
              {companies.map((c) => <td key={c.id} className="border px-2 py-1">{c.size}</td>)}
            </tr>
            <tr>
              <td className="border px-2 py-1 font-medium">Rating</td>
              {companies.map((c) => <td key={c.id} className="border px-2 py-1">{c.rating}</td>)}
            </tr>
          </tbody>
        </table>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace with backend company comparison data later */}
      </div>
    </div>
  );
}
