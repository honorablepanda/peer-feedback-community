
import React from 'react';

export default function AIOutputPreview({ output }) {
  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-lg font-semibold mb-3">AI Output Preview</h2>

      {output ? (
        <pre className="whitespace-pre-wrap text-gray-800 bg-gray-50 p-3 rounded">
          {output}
        </pre>
      ) : (
        <p className="text-sm text-gray-500">No output yet. Generate content to see results here.</p>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace dummy output with real AI-generated content when backend is ready */}
      </div>
    </div>
  );
}
