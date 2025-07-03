
import React, { useState, useEffect } from 'react';

// Dummy application details
const dummyApplication = {
  jobTitle: 'Software Engineer',
  company: 'TechCorp',
  stage: 'Interviewing',
  appliedDate: '2025-06-20',
  notes: 'Had phone screening. Waiting for onsite interview schedule.',
};

export default function ApplicationDetailView() {
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setApplication(dummyApplication);
      setLoading(false);
    }, 700);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-lg font-semibold mb-3">Application Detail View</h2>

      {loading ? (
        <p>Loading application details...</p>
      ) : (
        <div className="space-y-2 text-sm">
          <p><strong>Job Title:</strong> {application.jobTitle}</p>
          <p><strong>Company:</strong> {application.company}</p>
          <p><strong>Stage:</strong> {application.stage}</p>
          <p><strong>Applied Date:</strong> {application.appliedDate}</p>
          <p><strong>Notes:</strong> {application.notes}</p>
        </div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace with backend application detail API later */}
      </div>
    </div>
  );
}
