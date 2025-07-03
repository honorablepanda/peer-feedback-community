
import React, { useState, useEffect } from 'react';

// Dummy communication log entries
const dummyLog = [
  { id: 1, type: 'Email', date: '2025-06-25', summary: 'Sent follow-up email to recruiter at TechCorp.' },
  { id: 2, type: 'Call', date: '2025-06-23', summary: 'Phone screening with DataWorks.' },
  { id: 3, type: 'LinkedIn', date: '2025-06-22', summary: 'Messaged hiring manager at InnoSoft.' },
];

export default function CommunicationLog() {
  const [log, setLog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API load
    setTimeout(() => {
      setLog(dummyLog);
      setLoading(false);
    }, 700);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-lg font-semibold mb-3">Communication Log</h2>

      {loading ? (
        <p>Loading communication history...</p>
      ) : log.length === 0 ? (
        <p>No communication history found.</p>
      ) : (
        <ul className="space-y-2 text-sm">
          {log.map(entry => (
            <li key={entry.id} className="border p-2 rounded bg-gray-50">
              <p><strong>Type:</strong> {entry.type}</p>
              <p><strong>Date:</strong> {entry.date}</p>
              <p><strong>Summary:</strong> {entry.summary}</p>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect to backend communication log API later */}
      </div>
    </div>
  );
}
