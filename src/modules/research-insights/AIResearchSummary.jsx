
import React, { useState, useEffect } from 'react';

// Dummy AI research summary
const dummySummary = \`
TechCorp Inc. has shown a 20% year-over-year growth in revenue.
Recent expansions include a new AI research division.
Glassdoor ratings indicate strong employee satisfaction.
Job postings show increased demand for AI Engineers and Data Scientists.
\`;

export default function AIResearchSummary() {
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch delay
    setTimeout(() => {
      setSummary(dummySummary);
      setLoading(false);
    }, 900);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold mb-3">AI Research Summary</h2>

      {loading ? (
        <p>Generating research summary...</p>
      ) : (
        <pre className="whitespace-pre-wrap text-gray-800 bg-gray-50 p-3 rounded">
          {summary}
        </pre>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect this to AI backend for dynamic summaries later */}
      </div>
    </div>
  );
}
