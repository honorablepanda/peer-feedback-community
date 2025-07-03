import React from 'react';

// Dummy skill report data
const dummySkillReport = [
  { skill: 'JavaScript', proficiency: 'Advanced', years: 4 },
  { skill: 'React', proficiency: 'Intermediate', years: 2 },
  { skill: 'TypeScript', proficiency: 'Beginner', years: 1 },
];

export default function ExportSkillReport() {
  const handleExportCSV = () => {
    const headers = Object.keys(dummySkillReport[0]).join(',');
    const rows = dummySkillReport.map((item) =>
      Object.values(item).join(',')
    ).join('\n');
    const csvContent = `${headers}\n${rows}`;

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Skill_Gap_Report.csv';
    link.click();
  };

  const handleExportJSON = () => {
    const jsonContent = JSON.stringify(dummySkillReport, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Skill_Gap_Report.json';
    link.click();
  };

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Export Skill Gap Report</h2>

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
        {/* TODO: Replace dummy export with backend-generated downloadable reports */}
      </div>
    </div>
  );
}
