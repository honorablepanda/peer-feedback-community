
import React, { useState, useEffect } from 'react';

// Dummy AI rewrite suggestions
const dummySuggestions = [
  'Rewrite 1: Make the opening sentence more engaging.',
  'Rewrite 2: Add more action-oriented language.',
  'Rewrite 3: Shorten the paragraph for better readability.',
];

export default function AIRewriteSuggestions({ content }) {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (content.trim()) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setSuggestions(dummySuggestions);
        setLoading(false);
      }, 900);
    } else {
      setSuggestions([]);
      setLoading(false);
    }
  }, [content]);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold mb-3">AI Rewrite Suggestions</h2>

      {loading ? (
        <p>Generating rewrite suggestions...</p>
      ) : suggestions.length === 0 ? (
        <p>Enter content above to get rewrite suggestions.</p>
      ) : (
        <ul className="list-disc pl-5 text-sm space-y-2">
          {suggestions.map((suggestion, idx) => (
            <li key={idx}>{suggestion}</li>
          ))}
        </ul>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace with real AI rewrite API later */}
      </div>
    </div>
  );
}
