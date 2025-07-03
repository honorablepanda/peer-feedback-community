
import React from 'react';

export default function QuestionPromptPanel({ question }) {
  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-lg font-semibold mb-2">Current Interview Question</h2>
      <p className="text-sm text-gray-800">{question}</p>

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace with dynamically fetched questions from backend later */}
      </div>
    </div>
  );
}
