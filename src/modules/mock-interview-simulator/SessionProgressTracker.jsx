
import React from 'react';

export default function SessionProgressTracker({ progress, total }) {
  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h3 className="text-lg font-semibold mb-2">Session Progress</h3>

      <p className="text-sm">
        Questions Answered: <strong>{progress}</strong> / {total}
      </p>

      <div className="mt-2 text-xs text-gray-500">
        {/* TODO: Link progress tracker to backend session tracking later */}
      </div>
    </div>
  );
}
