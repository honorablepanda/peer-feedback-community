import React from 'react';

const dummyApplicationData = [
  { id: 1, title: 'Software Engineer', company: 'TechCorp', status: 'Applied' },
  { id: 2, title: 'Product Manager', company: 'InnoSoft', status: 'Interviewing' },
];

// Utility to convert data to CSV format
const toCSV = (data) => {
  const headers = Object.keys(data[0]).join(',');
  const rows = data.map(row => Object.values(row).join(',')).join('\n');
  return `${headers}\n${rows}`;
};

export default function ExportApplications() {
  const handleExportCSV = () => {
    const csv = toCSV(dummyApplicationData);
    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Applications.csv';
    link.click();
  };

  const handleExportJSON = () => {
    const json = JSON.stringify(dummyApplicationData, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Applications.json';
    link.click();
  };

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold mb-3">Export Applications</h2>

      <div className="flex space-x-3">
        <button
          onClick={handleExportCSV}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Export CSV
        </button>

        <button
          onClick={handleExportJSON}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Export JSON
        </button>
      </div>

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace dummy data with real backend data for export */}
      </div>
    </div>
  );
}
