import React from 'react';

// Dummy learning progress data
const dummyProgressData = [
  { course: 'Advanced React Development', progress: '50%' },
  { course: 'Node.js Backend Fundamentals', progress: '30%' },
  { course: 'Data Visualization with D3.js', progress: '70%' },
];

export default function ExportLearningProgress() {
  const handleExportCSV = () => {
    const headers = 'Course,Progress';
    const rows = dummyProgressData.map((item) => `${item.course},${item.progress}`).join('\n');
    const csvContent = `${headers}\n${rows}`;

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Learning_Progress.csv';
    link.click();
  };

  const handleExportJSON = () => {
    const jsonContent = JSON.stringify(dummyProgressData, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Learning_Progress.json';
    link.click();
  };

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Export Learning Progress</h2>

      <div className="flex space-x-3">
        <button
          onClick={handleExportCSV}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
        >
          Export as CSV
        </button>

        <button
          onClick={handleExportJSON}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
        >
          Export as JSON
        </button>
      </div>

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace dummy progress data with backend-generated learning progress export */}
      </div>
    </div>
  );
}
