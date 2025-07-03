import React, { useState, useEffect } from 'react';

// Dummy challenges data
const dummyChallenges = [
  {
    id: 1,
    title: 'Apply to 3 Jobs This Week',
    description: 'Boost your job search activity by applying to at least 3 positions this week.',
    points: 50,
  },
  {
    id: 2,
    title: 'Complete Profile Summary',
    description: 'Fill out your professional summary section in your profile.',
    points: 30,
  },
  {
    id: 3,
    title: 'Connect with 2 Recruiters',
    description: 'Reach out to at least 2 recruiters on LinkedIn or via email.',
    points: 40,
  },
];

export default function ChallengesList() {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching challenges from backend
    setTimeout(() => {
      setChallenges(dummyChallenges);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend API call (e.g., GET /api/gamification/challenges)
  }, []);

  const handleAcceptChallenge = (challengeId) => {
    alert(`Challenge ${challengeId} accepted!`);
    // TODO: Send accept action to backend API (e.g., POST /api/gamification/challenges/accept)
  };

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Available Challenges</h2>

      {loading ? (
        <div className="text-gray-500">Loading challenges...</div>
      ) : challenges.length > 0 ? (
        <ul className="space-y-4 text-sm">
          {challenges.map((challenge) => (
            <li key={challenge.id} className="border p-3 rounded bg-gray-50">
              <p className="font-medium text-lg">{challenge.title}</p>
              <p className="text-gray-600">{challenge.description}</p>
              <p className="text-xs text-gray-500 mb-2">Points: {challenge.points}</p>
              <button
                onClick={() => handleAcceptChallenge(challenge.id)}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-xs"
              >
                Accept Challenge
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-500">No challenges available at the moment.</div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect accept action and challenge list to backend */}
      </div>
    </div>
  );
}
