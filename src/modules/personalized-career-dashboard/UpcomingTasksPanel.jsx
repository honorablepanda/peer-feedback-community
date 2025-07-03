
import React, { useState, useEffect } from 'react';

// Dummy upcoming tasks
const dummyTasks = [
  { id: 1, task: 'Finish editing LinkedIn profile', dueDate: '2025-07-02' },
  { id: 2, task: 'Apply to 3 target companies', dueDate: '2025-07-05' },
  { id: 3, task: 'Prepare for behavioral interview questions', dueDate: '2025-07-08' },
];

export default function UpcomingTasksPanel() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetch
    setTimeout(() => {
      setTasks(dummyTasks);
      setLoading(false);
    }, 700);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-lg font-semibold mb-3">Upcoming Tasks</h2>

      {loading ? (
        <p>Loading tasks...</p>
      ) : tasks.length === 0 ? (
        <p>No upcoming tasks.</p>
      ) : (
        <ul className="space-y-2 text-sm">
          {tasks.map((task) => (
            <li key={task.id} className="border p-2 rounded bg-gray-50">
              <p>{task.task}</p>
              <p className="text-xs text-gray-500">Due: {task.dueDate}</p>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect to backend tasks API later */}
      </div>
    </div>
  );
}
