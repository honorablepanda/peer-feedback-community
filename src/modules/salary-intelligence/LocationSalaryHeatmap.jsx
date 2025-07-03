import React, { useState, useEffect } from 'react';

// Dummy location-based salary data
const dummyLocationSalaries = [
  { location: 'San Francisco, CA', averageSalary: 130000 },
  { location: 'New York, NY', averageSalary: 125000 },
  { location: 'Austin, TX', averageSalary: 110000 },
  { location: 'Remote', averageSalary: 100000 },
];

export default function LocationSalaryHeatmap() {
  const [locationData, setLocationData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate backend API fetch
    setTimeout(() => {
      setLocationData(dummyLocationSalaries);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend API call (e.g., GET /api/salary/location-heatmap)
  }, []);

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Location-Based Salary Overview</h2>

      {loading ? (
        <div className="text-gray-500">Loading location salary data...</div>
      ) : locationData.length > 0 ? (
        <ul className="space-y-3 text-sm">
          {locationData.map((item, idx) => (
            <li key={idx} className="border p-3 rounded bg-gray-50">
              <p className="font-medium">{item.location}</p>
              <p className="text-gray-600">
                Average Salary: <span className="font-semibold">${item.averageSalary.toLocaleString()}</span>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-500">No location salary data available.</div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace this list with an actual interactive map/heatmap once backend and visualization setup is ready */}
      </div>
    </div>
  );
}
