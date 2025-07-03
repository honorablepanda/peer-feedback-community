import React, { useState, useEffect } from 'react';

// Dummy AI-recommended job matches
const dummyJobMatches = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechCorp',
    location: 'Remote',
  },
  {
    id: 2,
    title: 'Full Stack Engineer',
    company: 'InnoSoft Solutions',
    location: 'San Francisco, CA',
  },
  {
    id: 3,
    title: 'Data Analyst',
    company: 'DataWorks Inc.',
    location: 'New York, NY',
  },
];

export default function JobMatchRecommendations() {
  const [jobMatches, setJobMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate backend AI API fetch
    setTimeout(() => {
      setJobMatches(dummyJobMatches);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend API call (e.g., GET /api/ai-career-agent/job-matches)
  }, []);

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">AI Job Match Recommendations</h2>

      {loading ? (
        <div className="text-gray-500">Loading AI job matches...</div>
      ) : jobMatches.length > 0 ? (
        <ul className="space-y-4 text-sm">
          {jobMatches.map((job) => (
            <li key={job.id} className="border p-3 rounded bg-gray-50">
              <p className="font-medium text-lg">{job.title}</p>
              <p className="text-gray-600">{job.company} - {job.location}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-500">No job matches available at this time.</div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect to backend AI job recommendation API */}
      </div>
    </div>
  );
}
