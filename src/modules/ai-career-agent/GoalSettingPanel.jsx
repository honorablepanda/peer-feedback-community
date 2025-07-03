import React, { useState, useEffect } from 'react';

// Dummy career goals data
const dummyGoals = [
  { id: 1, goal: 'Apply to 5 jobs this week' },
  { id: 2, goal: 'Complete a React course' },
  { id: 3, goal: 'Update LinkedIn profile' },
];

export default function GoalSettingPanel() {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate backend fetch
    setTimeout(() => {
      setGoals(dummyGoals);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend API call (e.g., GET /api/ai-career-agent/goals)
  }, []);

  const handleAddGoal = () => {
    if (!newGoal.trim()) return;

    const newGoalObj = { id: goals.length + 1, goal: newGoal };
    setGoals((prev) => [...prev, newGoalObj]);
    setNewGoal('');

    // TODO: POST new goal to backend
  };

  const handleDeleteGoal = (id) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));

    // TODO: DELETE goal from backend
  };

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Career Goal Setting</h2>

      {loading ? (
        <div className="text-gray-500">Loading your goals...</div>
      ) : (
        <>
          <ul className="space-y-3 text-sm mb-4">
            {goals.map((goal) => (
              <li key={goal.id} className="border p-3 rounded bg-gray-50 flex justify-between items-center">
                <span>{goal.goal}</span>
                <button
                  onClick={() => handleDeleteGoal(goal.id)}
                  className="bg-red-600 text-white px-2 py-1 rounded text-xs hover:bg-red-700"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>

          <div className="flex space-x-2">
            <input
              type="text"
              value={newGoal}
              onChange={(e) => setNewGoal(e.target.value)}
              placeholder="Enter new goal..."
              className="flex-grow border rounded p-2 text-sm"
            />
            <button
              onClick={handleAddGoal}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
            >
              Add Goal
            </button>
          </div>
        </>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect goal creation and deletion to backend API */}
      </div>
    </div>
  );
}
