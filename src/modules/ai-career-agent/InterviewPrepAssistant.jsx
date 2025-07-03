import React, { useState, useEffect } from 'react';

// Dummy AI-generated interview preparation data
const dummyPrepContent = {
  tips: [
    'Research the company and its recent projects.',
    'Prepare STAR (Situation, Task, Action, Result) stories for behavioral questions.',
    'Practice your elevator pitch and key skills summary.',
  ],
  sampleQuestions: [
    'Tell me about a time you solved a difficult problem.',
    'Why are you interested in this role?',
    'How do you handle tight deadlines?',
  ],
};

export default function InterviewPrepAssistant() {
  const [prepData, setPrepData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate backend AI API fetch
    setTimeout(() => {
      setPrepData(dummyPrepContent);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend API call (e.g., GET /api/ai-career-agent/interview-prep)
  }, []);

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Interview Prep Assistant</h2>

      {loading ? (
        <div className="text-gray-500">Loading interview tips and sample questions...</div>
      ) : (
        <>
          <div className="mb-4">
            <h3 className="font-medium text-lg">AI Interview Tips:</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {prepData.tips.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg">Sample AI-Generated Interview Questions:</h3>
            <ul className="list-decimal pl-5 space-y-1 text-sm">
              {prepData.sampleQuestions.map((question, idx) => (
                <li key={idx}>{question}</li>
              ))}
            </ul>
          </div>
        </>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Integrate dynamic AI-generated interview prep content from backend */}
      </div>
    </div>
  );
}
