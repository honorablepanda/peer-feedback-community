
import React, { useState, useEffect } from 'react';

// Dummy multi-tone output variations
const dummyOutputs = [
  { tone: 'Professional', content: 'We are excited to announce our latest product launch...' },
  { tone: 'Casual', content: 'Hey everyone! Check out our awesome new product...' },
  { tone: 'Enthusiastic', content: 'We’re thrilled to share BIG news about our new product!' },
];

export default function MultiToneOutputGenerator({ content }) {
  const [outputs, setOutputs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (content.trim()) {
      setLoading(true);
      // Simulate API delay
      setTimeout(() => {
        setOutputs(dummyOutputs);
        setLoading(false);
      }, 1000);
    } else {
      setOutputs([]);
      setLoading(false);
    }
  }, [content]);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold mb-3">Multi-Tone Output Generator</h2>

      {loading ? (
        <p>Generating tone variations...</p>
      ) : outputs.length === 0 ? (
        <p>Enter content above to generate tone variations.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {outputs.map((output, idx) => (
            <div key={idx} className="border p-3 rounded bg-gray-50">
              <h3 className="font-medium mb-2">{output.tone} Tone</h3>
              <p className="text-sm whitespace-pre-wrap">{output.content}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect to backend multi-tone generator later */}
      </div>
    </div>
  );
}
