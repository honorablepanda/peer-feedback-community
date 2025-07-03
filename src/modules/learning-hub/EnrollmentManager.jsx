import React, { useState, useEffect } from 'react';

// Dummy enrollment data
const dummyEnrollments = [
  {
    id: 1,
    courseTitle: 'Advanced React Development',
    enrollmentDate: '2025-06-20',
    progress: '50%',
  },
  {
    id: 2,
    courseTitle: 'Node.js Backend Fundamentals',
    enrollmentDate: '2025-06-22',
    progress: '30%',
  },
];

export default function EnrollmentManager() {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setEnrollments(dummyEnrollments);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend API call (e.g., GET /api/learning/enrollments)
  }, []);

  const handleUnenroll = (enrollmentId) => {
    setEnrollments((prev) => prev.filter((e) => e.id !== enrollmentId));
    alert(`Unenrolled from course ID: ${enrollmentId}`);

    // TODO: Trigger backend unenrollment (e.g., DELETE /api/learning/enrollments/:id)
  };

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Enrollment Manager</h2>

      {loading ? (
        <div className="text-gray-500">Loading your enrollments...</div>
      ) : enrollments.length > 0 ? (
        <ul className="space-y-4 text-sm">
          {enrollments.map((enrollment) => (
            <li key={enrollment.id} className="border p-3 rounded bg-gray-50">
              <p className="font-medium">{enrollment.courseTitle}</p>
              <p className="text-gray-600">Progress: {enrollment.progress}</p>
              <p className="text-xs text-gray-500">Enrolled on: {enrollment.enrollmentDate}</p>
              <button
                onClick={() => handleUnenroll(enrollment.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-xs mt-2"
              >
                Unenroll
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-500">You are not enrolled in any courses.</div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect unenroll and enrollment data fetch to backend API */}
      </div>
    </div>
  );
}
