import React, { useState, useEffect } from 'react';

// Dummy course catalog data
const dummyCourses = [
  {
    id: 1,
    title: 'Advanced React Development',
    description: 'Deep dive into React hooks, context API, and performance optimization.',
    provider: 'Udemy',
  },
  {
    id: 2,
    title: 'Node.js Backend Fundamentals',
    description: 'Learn how to build scalable backend APIs with Node.js and Express.',
    provider: 'Coursera',
  },
  {
    id: 3,
    title: 'Data Visualization with D3.js',
    description: 'Create stunning data visualizations using D3.js.',
    provider: 'Pluralsight',
  },
];

export default function CourseCatalog() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setCourses(dummyCourses);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend API call (e.g., GET /api/learning/courses)
  }, []);

  const handleEnroll = (courseId) => {
    alert(`Enrolled in course ID: ${courseId}`);
    // TODO: Trigger enrollment action via backend API (e.g., POST /api/learning/enroll)
  };

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Course Catalog</h2>

      {loading ? (
        <div className="text-gray-500">Loading available courses...</div>
      ) : courses.length > 0 ? (
        <ul className="space-y-4 text-sm">
          {courses.map((course) => (
            <li key={course.id} className="border p-3 rounded bg-gray-50">
              <p className="font-medium text-lg">{course.title}</p>
              <p className="text-gray-600">{course.description}</p>
              <p className="text-xs text-gray-500 mb-2">Provider: {course.provider}</p>
              <button
                onClick={() => handleEnroll(course.id)}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-xs"
              >
                Enroll
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-500">No courses available at the moment.</div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace dummy course data with backend-driven course list */}
      </div>
    </div>
  );
}
