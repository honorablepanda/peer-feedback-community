
import React, { useState } from 'react';

export default function ResearchQueryBuilder() {
  const [query, setQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setSubmittedQuery(query);
      setQuery('');
    }
  };

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold mb-3">Custom Research Query</h2>

      <form onSubmit={handleSubmit} className="space-y-2">
        <textarea
          className="w-full border rounded p-2"
          rows={4}
          placeholder="Ask the AI for company info, industry stats, or job market insights..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Query
        </button>
      </form>

      {submittedQuery && (
        <div className="mt-4 p-3 border rounded bg-gray-50 text-sm">
          <p className="font-semibold">Submitted Query:</p>
          <p>{submittedQuery}</p>
          <p className="mt-2 text-gray-500 text-xs">TODO: Replace with real AI-generated response later.</p>
        </div>
      )}
    </div>
  );
}
