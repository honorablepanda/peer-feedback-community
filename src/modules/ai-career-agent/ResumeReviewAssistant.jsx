import React, { useState, useEffect } from 'react';

// Dummy AI-generated resume feedback
const dummyFeedback = [
  'Add more quantifiable achievements (e.g., "Increased website traffic by 30%").',
  'Consider including a summary section at the top of your resume.',
  'Tailor your work experience descriptions to better match the job you’re applying for.',
  'Highlight your technical skills with a dedicated "Skills" section.',
];

export default function ResumeReviewAssistant() {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate backend API fetch
    setTimeout(() => {
      setFeedback(dummyFeedback);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend API call (e.g., POST /api/ai-career-agent/resume-review)
  }, []);

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Resume Review Assistant</h2>

      {loading ? (
        <div className="text-gray-500">Analyzing your resume...</div>
      ) : feedback.length > 0 ? (
        <ul className="list-disc pl-5 space-y-2 text-sm">
          {feedback.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-500">No feedback available at the moment.</div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect this component to backend resume analysis API */}
      </div>
    </div>
  );
}
