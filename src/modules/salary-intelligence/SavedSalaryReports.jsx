import React, { useState, useEffect } from 'react';

// Dummy saved salary reports
const dummyReports = [
  { id: 1, title: 'Software Engineer Salary Report', savedOn: '2025-06-20' },
  { id: 2, title: 'Product Manager Compensation Overview', savedOn: '2025-06-22' },
  { id: 3, title: 'Data Analyst Market Trends', savedOn: '2025-06-25' },
];

export default function SavedSalaryReports() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate backend API fetch
    setTimeout(() => {
      setReports(dummyReports);
      setLoading(false);
    }, 1000);

    // TODO: Replace with real backend API call (e.g., GET /api/salary/saved-reports)
  }, []);

  const handleDelete = (id) => {
    // Simulate deletion in frontend state
    setReports((prev) => prev.filter((report) => report.id !== id));

    // TODO: Implement backend DELETE API call (e.g., DELETE /api/salary/saved-reports/:id)
  };

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Saved Salary Reports</h2>

      {loading ? (
        <div className="text-gray-500">Loading saved reports...</div>
      ) : reports.length > 0 ? (
        <ul className="space-y-3 text-sm">
          {reports.map((report) => (
            <li
              key={report.id}
              className="border p-3 rounded bg-gray-50 flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{report.title}</p>
                <p className="text-xs text-gray-500">Saved on: {report.savedOn}</p>
              </div>
              <button
                onClick={() => handleDelete(report.id)}
                className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 text-xs"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-500">No saved salary reports found.</div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Wire delete and fetch actions to backend API */}
      </div>
    </div>
  );
}
