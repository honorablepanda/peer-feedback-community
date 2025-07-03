
import React, { useState, useEffect } from 'react';

// Dummy XP data
const dummyXPData = {
  currentLevel: 3,
  currentXP: 850,
  nextLevelXP: 1000,
  levelTitle: 'Feedback Champion',
};

export default function CareerXPProgress() {
  const [xpData, setXpData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API data loading
    setTimeout(() => {
      setXpData(dummyXPData);
      setLoading(false);
    }, 900);
  }, []);

  const progressPercent = xpData
    ? Math.min((xpData.currentXP / xpData.nextLevelXP) * 100, 100)
    : 0;

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold mb-3">Your Career XP Progress</h2>

      {loading ? (
        <p>Loading XP data...</p>
      ) : xpData ? (
        <div className="space-y-3">
          <p><strong>Level:</strong> {xpData.currentLevel} - {xpData.levelTitle}</p>
          <div className="relative w-full bg-gray-200 rounded h-4">
            <div
              className="bg-green-500 h-4 rounded"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-700">
            {xpData.currentXP} XP / {xpData.nextLevelXP} XP
          </p>
        </div>
      ) : (
        <p>No XP data available.</p>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect to backend XP tracker later */}
        Progress based on your feedback activities.
      </div>
    </div>
  );
}
