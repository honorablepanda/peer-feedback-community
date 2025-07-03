
import React, { useState } from 'react';

export default function ContentInputEditor({ content, onChange }) {
  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold mb-3">Content Input Editor</h2>

      <textarea
        className="w-full border rounded p-3"
        rows={6}
        placeholder="Paste or type your LinkedIn post, outreach email, or social content here..."
        value={content}
        onChange={(e) => onChange(e.target.value)}
      />

      <div className="mt-2 text-xs text-gray-500">
        {/* TODO: Hook this input into AI optimization pipelines later */}
        Your original content for analysis and optimization.
      </div>
    </div>
  );
}
