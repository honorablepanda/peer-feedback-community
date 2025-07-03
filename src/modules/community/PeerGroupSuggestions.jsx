
import React, { useState, useEffect } from 'react';

// Dummy peer group suggestions
const dummyGroups = [
  { id: 1, name: 'Resume Reviewers', members: 15 },
  { id: 2, name: 'STAR Story Feedback Group', members: 10 },
  { id: 3, name: 'Cover Letter Coaches', members: 8 },
];

export default function PeerGroupSuggestions() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching groups from backend
    setTimeout(() => {
      setGroups(dummyGroups);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold mb-3">Suggested Peer Feedback Groups</h2>

      {loading ? (
        <p>Loading group suggestions...</p>
      ) : groups.length === 0 ? (
        <p>No peer groups available at the moment.</p>
      ) : (
        <ul className="space-y-3">
          {groups.map(group => (
            <li key={group.id} className="border p-3 rounded bg-gray-50 flex justify-between items-center">
              <div>
                <p className="font-medium">{group.name}</p>
                <p className="text-sm text-gray-500">{group.members} members</p>
              </div>
              <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                Join
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace with AI-based matching and backend API later */}
        AI-curated group recommendations.
      </div>
    </div>
  );
}
