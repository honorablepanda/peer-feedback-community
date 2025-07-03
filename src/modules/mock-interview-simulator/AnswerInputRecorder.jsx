
import React from 'react';

export default function AnswerInputRecorder({ answer, onChange }) {
  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-lg font-semibold mb-3">Your Answer</h2>

      <textarea
        className="w-full border rounded p-3"
        rows={6}
        placeholder="Type your interview answer here..."
        value={answer}
        onChange={(e) => onChange(e.target.value)}
      />

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Add voice recording option in backend phase */}
      </div>
    </div>
  );
}
