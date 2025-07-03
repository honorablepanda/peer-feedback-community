
import React, { useState, useEffect } from 'react';

// Dummy feedback loop activity data
const dummyActivities = [
  { id: 1, type: 'comment', description: 'You gave feedback on User123's resume.', timestamp: '2 hours ago' },
  { id: 2, type: 'reply', description: 'CareerSeeker88 replied to your comment.', timestamp: '1 day ago' },
  { id: 3, type: 'upvote', description: 'Your comment on STAR stories got 5 upvotes.', timestamp: '3 days ago' },
];

export default function FeedbackLoop() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate backend fetch delay
    setTimeout(() => {
      setActivities(dummyActivities);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold mb-3">Your Feedback Activity Loop</h2>

      {loading ? (
        <p>Loading activity feed...</p>
      ) : activities.length === 0 ? (
        <p>No recent activity yet.</p>
      ) : (
        <ul className="space-y-3">
          {activities.map(activity => (
            <li key={activity.id} className="border p-3 rounded bg-gray-50">
              <p>{activity.description}</p>
              <p className="text-xs text-gray-500">{activity.timestamp}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
