import React, { useState, useEffect } from 'react';

// Dummy saved courses data
const dummySavedCourses = [
  {
    id: 1,
    title: 'Mastering TypeScript',
    provider: 'Udemy',
  },
  {
    id: 2,
    title: 'System Design Basics',
    provider: 'Coursera',
  },
  {
    id: 3,
    title: 'Data Visualization with D3.js',
    provider: 'Pluralsight',
  },
];

export default function SavedCoursesManager() {
  const [savedCourses, setSavedCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setSavedCourses(dummySavedCourses);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend API call (e.g., GET /api/learning/saved-courses)
  }, []);

  const handleDelete = (courseId) => {
    setSavedCourses((prev) => prev.filter((course) => course.id !== courseId));
    alert(`Removed course ID ${courseId} from saved list.`);

    // TODO: Send delete request to backend API (e.g., DELETE /api/learning/saved-courses/:id)
  };

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Saved Courses</h2>

      {loading ? (
        <div className="text-gray-500">Loading saved courses...</div>
      ) : savedCourses.length > 0 ? (
        <ul className="space-y-4 text-sm">
          {savedCourses.map((course) => (
            <li key={course.id} className="border p-3 rounded bg-gray-50 flex justify-between items-center">
              <div>
                <p className="font-medium">{course.title}</p>
                <p className="text-xs text-gray-500">Provider: {course.provider}</p>
              </div>
              <button
                onClick={() => handleDelete(course.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-xs"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-500">You have no saved courses.</div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect saved courses list and delete action to backend */}
      </div>
    </div>
  );
}
