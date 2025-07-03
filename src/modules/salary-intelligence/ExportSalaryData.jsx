import React from 'react';

// Dummy salary report data
const dummySalaryReport = [
  { role: 'Software Engineer', averageSalary: 105000 },
  { role: 'Product Manager', averageSalary: 120000 },
  { role: 'Data Analyst', averageSalary: 85000 },
  { role: 'UX Designer', averageSalary: 95000 },
];

export default function ExportSalaryData() {
  const handleExportCSV = () => {
    const headers = Object.keys(dummySalaryReport[0]).join(',');
    const rows = dummySalaryReport.map((item) => Object.values(item).join(',')).join('\n');
    const csvContent = `${headers}\n${rows}`;

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Salary_Data_Report.csv';
    link.click();
  };

  const handleExportJSON = () => {
    const jsonContent = JSON.stringify(dummySalaryReport, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Salary_Data_Report.json';
    link.click();
  };

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Export Salary Data</h2>

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
        {/* TODO: Replace dummy data with backend-generated export reports */}
      </div>
    </div>
  );
}
