
import React from 'react';

export default function ExportContentOptions({ output }) {
  const handleCopy = () => {
    if (output) {
      navigator.clipboard.writeText(output);
      alert('Content copied to clipboard!');
    }
  };

  const handleDownload = () => {
    if (output) {
      const blob = new Blob([output], { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'AI_Generated_Content.txt';
      link.click();
    }
  };

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-lg font-semibold mb-3">Export Content</h2>

      {!output ? (
        <p className="text-sm text-gray-500">No content to export yet.</p>
      ) : (
        <div className="flex space-x-3">
          <button
            onClick={handleCopy}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
          >
            Copy to Clipboard
          </button>
          <button
            onClick={handleDownload}
            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm"
          >
            Download as .txt
          </button>
        </div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Expand export options (PDF, HTML, etc.) during backend phase */}
      </div>
    </div>
  );
}
