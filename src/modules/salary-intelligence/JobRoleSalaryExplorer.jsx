import React, { useState, useEffect } from 'react';

// Dummy salary data for different job roles
const dummyRoles = [
  { role: 'Software Engineer', averageSalary: 105000 },
  { role: 'Product Manager', averageSalary: 120000 },
  { role: 'Data Analyst', averageSalary: 85000 },
  { role: 'UX Designer', averageSalary: 95000 },
];

export default function JobRoleSalaryExplorer() {
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching role-based salary data
    setTimeout(() => {
      setRoles(dummyRoles);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend API call (e.g., GET /api/salary/roles)
  }, []);

  const selectedRoleData = roles.find((r) => r.role === selectedRole);

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Job Role Salary Explorer</h2>

      {loading ? (
        <div className="text-gray-500">Loading job roles...</div>
      ) : (
        <>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="w-full border p-2 rounded mb-4"
          >
            <option value="">Select a job role</option>
            {roles.map((role, idx) => (
              <option key={idx} value={role.role}>
                {role.role}
              </option>
            ))}
          </select>

          {selectedRole && selectedRoleData && (
            <div className="p-4 bg-gray-50 border rounded">
              <p className="font-medium text-lg">{selectedRoleData.role}</p>
              <p className="text-gray-600 text-sm">
                Average Salary: <span className="font-semibold">${selectedRoleData.averageSalary.toLocaleString()}</span>
              </p>
            </div>
          )}
        </>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Fetch dynamic job role salary data from backend */}
      </div>
    </div>
  );
}
