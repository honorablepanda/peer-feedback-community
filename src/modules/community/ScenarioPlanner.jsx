
import React, { useState, useEffect } from 'react';

// Dummy scenarios for planning
const dummyScenarios = [
  { id: 1, title: 'Resume Feedback Sprint', description: 'Collaboratively review 3 resumes in 30 minutes.' },
  { id: 2, title: 'STAR Story Workshop', description: 'Each peer drafts and shares 1 STAR story for review.' },
  { id: 3, title: 'LinkedIn Profile Optimization', description: 'Analyze and suggest improvements for LinkedIn headlines.' },
];

export default function ScenarioPlanner() {
  const [scenarios, setScenarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching scenarios from backend
    setTimeout(() => {
      setScenarios(dummyScenarios);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold mb-3">Collaborative Scenario Planner</h2>

      {loading ? (
        <p>Loading scenarios...</p>
      ) : scenarios.length === 0 ? (
        <p>No scenarios available right now.</p>
      ) : (
        <ul className="space-y-3">
          {scenarios.map(scenario => (
            <li key={scenario.id} className="border p-3 rounded bg-gray-50">
              <p className="font-medium">{scenario.title}</p>
              <p className="text-sm text-gray-600">{scenario.description}</p>
              <button className="mt-2 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
                Start Scenario
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect to backend and enable real-time collaboration later */}
        Choose or create a feedback scenario for your group.
      </div>
    </div>
  );
}
