
import React, { useState, useEffect } from 'react';

// Dummy roleplay scenarios
const dummyRoleplays = [
  { id: 1, title: 'Behavioral Interview', roles: ['Interviewer', 'Candidate'] },
  { id: 2, title: 'Salary Negotiation', roles: ['Employer', 'Job Seeker'] },
  { id: 3, title: 'STAR Story Presentation', roles: ['Peer Reviewer', 'Presenter'] },
];

export default function RolePlaySimulator() {
  const [scenarios, setScenarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedScenario, setSelectedScenario] = useState(null);

  useEffect(() => {
    // Simulate fetching roleplay scenarios
    setTimeout(() => {
      setScenarios(dummyRoleplays);
      setLoading(false);
    }, 1000);
  }, []);

  const handleSelect = (scenario) => {
    setSelectedScenario(scenario);
  };

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold mb-3">Peer Roleplay Simulator</h2>

      {loading ? (
        <p>Loading scenarios...</p>
      ) : selectedScenario ? (
        <div className="space-y-2">
          <p className="font-medium">Scenario: {selectedScenario.title}</p>
          <p className="text-sm text-gray-600">Choose your role to start the simulation:</p>
          <ul className="space-y-2">
            {selectedScenario.roles.map((role, idx) => (
              <li key={idx}>
                <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
                  Start as {role}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setSelectedScenario(null)}
            className="mt-3 text-blue-600 underline text-sm"
          >
            ← Back to scenarios
          </button>
        </div>
      ) : (
        <ul className="space-y-3">
          {scenarios.map((scenario) => (
            <li key={scenario.id} className="border p-3 rounded bg-gray-50">
              <p className="font-medium">{scenario.title}</p>
              <button
                onClick={() => handleSelect(scenario)}
                className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
              >
                Select Scenario
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace with real-time backend and peer matching later */}
        Simulate peer roleplay sessions with dummy data.
      </div>
    </div>
  );
}
