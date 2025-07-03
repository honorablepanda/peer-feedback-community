
import React, { useState } from 'react';

// Dummy filter options
const stages = ['Applied', 'Interviewing', 'Offer', 'Rejected'];

export default function ApplicationFiltersSidebar() {
  const [selectedStage, setSelectedStage] = useState('');
  const [company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  const handleApplyFilters = () => {
    alert(\`Filters Applied:\nStage: \${selectedStage}\nCompany: \${company}\nJob Title: \${jobTitle}\`);
  };

  return (
    <div className="p-4 border rounded shadow-md bg-gray-50 mt-6 w-72">
      <h3 className="text-lg font-semibold mb-3">Application Filters</h3>

      <div className="space-y-3 text-sm">
        <div>
          <label className="block mb-1 font-medium">Stage:</label>
          <select
            value={selectedStage}
            onChange={(e) => setSelectedStage(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="">All Stages</option>
            {stages.map(stage => (
              <option key={stage} value={stage}>{stage}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Company:</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company name"
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Job Title:</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="Job title"
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          onClick={handleApplyFilters}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Apply Filters
        </button>
      </div>

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Wire filters to application board and backend API later */}
      </div>
    </div>
  );
}
