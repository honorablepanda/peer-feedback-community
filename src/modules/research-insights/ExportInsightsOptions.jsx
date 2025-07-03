
import React from 'react';

export default function ExportInsightsOptions({ content }) {
  const handleCopy = () => {
    if (content) {
      navigator.clipboard.writeText(content);
      alert('Research insights copied to clipboard!');
    }
  };

  const handleDownload = () => {
    if (content) {
      const blob = new Blob([content], { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'Research_Insights.txt';
      link.click();
    }
  };

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-lg font-semibold mb-3">Export Research Insights</h2>

      {!content ? (
        <p className="text-sm text-gray-500">No insights available for export.</p>
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
        {/* TODO: Expand export formats (PDF, CSV, etc.) during backend phase */}
      </div>
    </div>
  );
}
