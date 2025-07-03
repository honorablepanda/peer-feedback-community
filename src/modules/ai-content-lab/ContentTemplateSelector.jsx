
import React from 'react';

// Dummy content template options
const templates = [
  'LinkedIn Post',
  'Resume Bullet',
  'Cover Letter Snippet',
  'Networking Message',
  'STAR Story',
];

export default function ContentTemplateSelector({ selected, onSelect }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Select Content Type</h2>
      <div className="flex flex-wrap gap-2">
        {templates.map((template) => (
          <button
            key={template}
            onClick={() => onSelect(template)}
            className={\`px-3 py-1 rounded border \${selected === template ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}\`}
          >
            {template}
          </button>
        ))}
      </div>
    </div>
  );
}
