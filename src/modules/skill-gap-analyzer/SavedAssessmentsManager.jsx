import React, { useState, useEffect } from 'react';

// Dummy saved assessments data
const dummyAssessments = [
  { id: 1, title: 'Frontend Skills Assessment', date: '2025-06-15' },
  { id: 2, title: 'Backend Developer Skill Check', date: '2025-06-20' },
  { id: 3, title: 'Full Stack Proficiency Test', date: '2025-06-25' },
];

export default function SavedAssessmentsManager() {
  const [assessments, setAssessments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching saved assessments
    setTimeout(() => {
      setAssessments(dummyAssessments);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend API call (e.g., GET /api/skills/saved-assessments)
  }, []);

  const handleDelete = (id) => {
    // Simulate delete in frontend state
    setAssessments((prev) => prev.filter((item) => item.id !== id));

    // TODO: Connect delete action to backend (e.g., DELETE /api/skills/saved-assessments/:id)
  };

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Saved Skill Assessments</h2>

      {loading ? (
        <div className="text-gray-500">Loading saved assessments...</div>
      ) : assessments.length > 0 ? (
        <ul className="space-y-3 text-sm">
          {assessments.map((assessment) => (
            <li
              key={assessment.id}
              className="border p-3 rounded bg-gray-50 flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{assessment.title}</p>
                <p className="text-xs text-gray-500">Date: {assessment.date}</p>
              </div>
              <button
                onClick={() => handleDelete(assessment.id)}
                className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 text-xs"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-500">No saved assessments found.</div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Fetch, delete, and manage saved assessments via backend */}
      </div>
    </div>
  );
}
