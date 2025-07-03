
import React, { useState, useEffect } from 'react';

// Dummy scoring data
const dummyScore = {
  totalQuestions: 3,
  averageScore: '8.5/10',
  strengths: ['Clarity', 'Use of STAR framework'],
  improvementAreas: ['More specific examples', 'Stronger closing statements'],
};

export default function InterviewScoreSummary() {
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate score calculation delay
    setTimeout(() => {
      setScore(dummyScore);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-green-50 mt-6">
      <h2 className="text-xl font-semibold mb-3">Interview Score Summary</h2>

      {loading ? (
        <p>Calculating your session score...</p>
      ) : (
        <>
          <p><strong>Total Questions Answered:</strong> {score.totalQuestions}</p>
          <p><strong>Average Score:</strong> {score.averageScore}</p>

          <div className="mt-2">
            <p className="font-semibold">Strengths:</p>
            <ul className="list-disc pl-5 text-sm">
              {score.strengths.map((s, idx) => <li key={idx}>{s}</li>)}
            </ul>
          </div>

          <div className="mt-2">
            <p className="font-semibold">Areas for Improvement:</p>
            <ul className="list-disc pl-5 text-sm">
              {score.improvementAreas.map((area, idx) => <li key={idx}>{area}</li>)}
            </ul>
          </div>
        </>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace with backend AI scoring engine later */}
      </div>
    </div>
  );
}
