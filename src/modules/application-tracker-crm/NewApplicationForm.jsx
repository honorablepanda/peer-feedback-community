
import React, { useState } from 'react';

// Dummy stages
const stages = ['Applied', 'Interviewing', 'Offer', 'Rejected'];

export default function NewApplicationForm() {
  const [formData, setFormData] = useState({
    jobTitle: '',
    company: '',
    stage: 'Applied',
    notes: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({
      jobTitle: '',
      company: '',
      stage: 'Applied',
      notes: '',
    });
  };

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-lg font-semibold mb-3">Add New Job Application</h2>

      <form onSubmit={handleSubmit} className="space-y-3 text-sm">
        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          value={formData.jobTitle}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <select
          name="stage"
          value={formData.stage}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          {stages.map(stage => (
            <option key={stage} value={stage}>{stage}</option>
          ))}
        </select>
        <textarea
          name="notes"
          placeholder="Notes"
          value={formData.notes}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          rows={3}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Application
        </button>
      </form>

      {submittedData && (
        <div className="mt-4 bg-green-50 p-3 rounded text-sm">
          <h3 className="font-medium">Application Saved (Dummy State)</h3>
          <p><strong>Title:</strong> {submittedData.jobTitle}</p>
          <p><strong>Company:</strong> {submittedData.company}</p>
          <p><strong>Stage:</strong> {submittedData.stage}</p>
          <p><strong>Notes:</strong> {submittedData.notes}</p>
        </div>
      )}

      <div className="mt-2 text-xs text-gray-500">
        {/* TODO: Connect to backend application creation API later */}
      </div>
    </div>
  );
}
