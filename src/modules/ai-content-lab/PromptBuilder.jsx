
import React from 'react';

export default function PromptBuilder({ value, onChange }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Build Your AI Prompt</h2>
      <textarea
        className="w-full border rounded p-2"
        rows={5}
        placeholder="Describe what you want the AI to generate..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
