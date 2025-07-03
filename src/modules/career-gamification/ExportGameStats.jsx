import React from 'react';

// Dummy game stats data
const dummyGameStats = [
  { stat: 'Total Points', value: 1500 },
  { stat: 'Level', value: 5 },
  { stat: 'Challenges Completed', value: 12 },
  { stat: 'Badges Earned', value: 8 },
];

export default function ExportGameStats() {
  const handleExportCSV = () => {
    const headers = 'Stat,Value';
    const rows = dummyGameStats.map((item) => `${item.stat},${item.value}`).join('\n');
    const csvContent = `${headers}\n${rows}`;

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Game_Stats.csv';
    link.click();
  };

  const handleExportJSON = () => {
    const jsonContent = JSON.stringify(dummyGameStats, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Game_Stats.json';
    link.click();
  };

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Export Game Stats</h2>

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
        {/* TODO: Replace dummy stats with backend-driven game stats export */}
      </div>
    </div>
  );
}
