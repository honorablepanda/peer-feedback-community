import React, { useState, useEffect } from 'react';

const dummySkillProfile = [
  { skill: 'JavaScript', proficiency: 'Advanced', years: 4 },
  { skill: 'React', proficiency: 'Intermediate', years: 2 },
  { skill: 'CSS', proficiency: 'Advanced', years: 3 },
];

export default function UserSkillProfile() {
  const [skillProfile, setSkillProfile] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from backend
    setTimeout(() => {
      setSkillProfile(dummySkillProfile);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend API call (e.g., GET /api/skills/profile for authenticated user)
  }, []);

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Your Skill Profile</h2>

      {loading ? (
        <div className="text-gray-500">Loading skill profile...</div>
      ) : skillProfile.length > 0 ? (
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Skill</th>
              <th className="px-4 py-2">Proficiency</th>
              <th className="px-4 py-2">Years of Experience</th>
            </tr>
          </thead>
          <tbody>
            {skillProfile.map((item, idx) => (
              <tr key={idx} className="border-t">
                <td className="px-4 py-2">{item.skill}</td>
                <td className="px-4 py-2">{item.proficiency}</td>
                <td className="px-4 py-2">{item.years} years</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-gray-500">No skill profile data available.</div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Fetch real user skill profile from backend */}
      </div>
    </div>
  );
}
