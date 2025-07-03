
import React, { useState, useEffect } from 'react';

// Dummy company insights data
const dummyInsights = {
  name: 'TechCorp Inc.',
  industry: 'Software & IT Services',
  size: '5,000 - 10,000 employees',
  headquarters: 'San Francisco, CA',
  recentNews: [
    'TechCorp announces new AI partnership with OpenAI.',
    'Expansion into European markets planned for Q3.',
    'Named one of the Best Places to Work 2025 by TechMag.'
  ],
};

export default function CompanyInsightsPanel() {
  const [insights, setInsights] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API delay
    setTimeout(() => {
      setInsights(dummyInsights);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold mb-3">Company Insights</h2>

      {loading ? (
        <p>Loading company data...</p>
      ) : (
        insights && (
          <div className="space-y-2">
            <p><strong>Name:</strong> {insights.name}</p>
            <p><strong>Industry:</strong> {insights.industry}</p>
            <p><strong>Company Size:</strong> {insights.size}</p>
            <p><strong>Headquarters:</strong> {insights.headquarters}</p>

            <div>
              <p className="font-semibold">Recent News:</p>
              <ul className="list-disc pl-5 text-sm">
                {insights.recentNews.map((news, idx) => (
                  <li key={idx}>{news}</li>
                ))}
              </ul>
            </div>
          </div>
        )
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace with backend company insights API later */}
      </div>
    </div>
  );
}
