
import React, { useState, useEffect } from 'react';

// Dummy multiple AI outputs
const dummyOutputs = [
  { id: 1, label: 'Option A', content: 'This is the first AI-generated version of your content.' },
  { id: 2, label: 'Option B', content: 'Here’s an alternative tone and phrasing for your content.' },
  { id: 3, label: 'Option C', content: 'Another variation with more concise language.' },
];

export default function MultiOutputComparer() {
  const [outputs, setOutputs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setOutputs(dummyOutputs);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-lg font-semibold mb-3">Multi-Output Comparison</h2>

      {loading ? (
        <p>Loading AI output variations...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {outputs.map((output) => (
            <div key={output.id} className="border p-3 rounded bg-gray-50">
              <h3 className="font-medium mb-2">{output.label}</h3>
              <p className="text-sm whitespace-pre-wrap">{output.content}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect to real AI multi-output API later */}
        Showing dummy output variations for now.
      </div>
    </div>
  );
}
