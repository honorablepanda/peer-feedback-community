
import React from 'react';

// Dummy tone options
const tones = ['Professional', 'Casual', 'Enthusiastic', 'Concise', 'Creative'];

export default function ToneSelector({ selected, onSelect }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Select Tone</h2>
      <div className="flex flex-wrap gap-2">
        {tones.map((tone) => (
          <button
            key={tone}
            onClick={() => onSelect(tone)}
            className={\`px-3 py-1 rounded border \${selected === tone ? 'bg-purple-600 text-white' : 'bg-white text-gray-800'}\`}
          >
            {tone}
          </button>
        ))}
      </div>
    </div>
  );
}
