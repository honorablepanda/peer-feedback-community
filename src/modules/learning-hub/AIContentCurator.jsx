import React, { useState, useEffect } from 'react';

// Dummy AI-curated learning content recommendations
const dummyAIContent = [
  'Recommended: "Clean Code Principles" - Improve your coding style and readability.',
  'Suggested Next: "System Design for Beginners" - Start learning scalable system architectures.',
  'AI Tip: Focus on building full-stack projects to strengthen portfolio visibility.',
];

export default function AIContentCurator() {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate AI API fetch
    setTimeout(() => {
      setContent(dummyAIContent);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend AI API call (e.g., GET /api/learning/ai-content-curation)
  }, []);

  return (
    <div className="p-6 border rounded shadow-md bg-purple-50">
      <h2 className="text-xl font-semibold mb-4">AI Content Curator</h2>

      {loading ? (
        <div className="text-gray-500">Fetching personalized AI learning suggestions...</div>
      ) : content.length > 0 ? (
        <ul className="list-disc pl-5 space-y-2 text-sm">
          {content.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-500">No AI content suggestions available at the moment.</div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect to AI backend for dynamic learning content suggestions */}
      </div>
    </div>
  );
}
