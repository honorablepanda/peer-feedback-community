
import React, { useState, useEffect } from 'react';

// Dummy career stats
const dummyStats = {
  applicationsSent: 25,
  interviewsCompleted: 8,
  offersReceived: 2,
};

export default function CareerStatsSummary() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setStats(dummyStats);
      setLoading(false);
    }, 700);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-lg font-semibold mb-3">Career Stats Summary</h2>

      {loading ? (
        <p>Loading career stats...</p>
      ) : (
        <ul className="space-y-2 text-sm">
          <li><strong>Applications Sent:</strong> {stats.applicationsSent}</li>
          <li><strong>Interviews Completed:</strong> {stats.interviewsCompleted}</li>
          <li><strong>Offers Received:</strong> {stats.offersReceived}</li>
        </ul>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace with backend stats service later */}
      </div>
    </div>
  );
}
