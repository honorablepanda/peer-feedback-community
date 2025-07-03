
import React, { useState, useEffect } from 'react';

// Dummy tone analysis result
const dummyAnalysis = {
  tone: 'Professional',
  sentiment: 'Positive',
  styleNotes: [
    'Good use of action verbs.',
    'Clear call to action.',
    'Could improve emotional engagement.',
  ],
};

export default function ToneStyleAnalyzer({ content }) {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (content.trim()) {
      setLoading(true);
      // Simulate AI analysis delay
      setTimeout(() => {
        setAnalysis(dummyAnalysis);
        setLoading(false);
      }, 1000);
    } else {
      setAnalysis(null);
      setLoading(false);
    }
  }, [content]);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold mb-3">Tone & Style Analysis</h2>

      {loading ? (
        <p>Analyzing content...</p>
      ) : analysis ? (
        <div className="space-y-2 text-sm">
          <p><strong>Detected Tone:</strong> {analysis.tone}</p>
          <p><strong>Sentiment:</strong> {analysis.sentiment}</p>
          <div>
            <p className="font-semibold">Style Notes:</p>
            <ul className="list-disc pl-5">
              {analysis.styleNotes.map((note, idx) => (
                <li key={idx}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Enter content above to analyze tone and style.</p>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace with real AI tone/style analysis API later */}
      </div>
    </div>
  );
}
