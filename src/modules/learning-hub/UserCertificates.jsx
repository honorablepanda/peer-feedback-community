import React, { useState, useEffect } from 'react';

// Dummy certificate data
const dummyCertificates = [
  {
    id: 1,
    title: 'Advanced React Developer',
    issuedBy: 'Udemy',
    dateEarned: '2025-06-15',
  },
  {
    id: 2,
    title: 'Node.js Backend Specialist',
    issuedBy: 'Coursera',
    dateEarned: '2025-06-20',
  },
  {
    id: 3,
    title: 'Frontend UI Design Expert',
    issuedBy: 'Pluralsight',
    dateEarned: '2025-06-25',
  },
];

export default function UserCertificates() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setCertificates(dummyCertificates);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend API call (e.g., GET /api/learning/certificates)
  }, []);

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Your Certificates</h2>

      {loading ? (
        <div className="text-gray-500">Loading your certificates...</div>
      ) : certificates.length > 0 ? (
        <ul className="space-y-4 text-sm">
          {certificates.map((cert) => (
            <li key={cert.id} className="border p-3 rounded bg-gray-50">
              <p className="font-medium text-lg">{cert.title}</p>
              <p className="text-gray-600">Issued by: {cert.issuedBy}</p>
              <p className="text-xs text-gray-500">Earned on: {cert.dateEarned}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-500">You haven’t earned any certificates yet.</div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect certificates list to backend API */}
      </div>
    </div>
  );
}
