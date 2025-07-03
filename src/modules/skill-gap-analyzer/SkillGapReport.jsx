import React, { useState, useEffect } from 'react';

const dummySkillGaps = [
  { skill: 'TypeScript', currentLevel: 'Beginner', desiredLevel: 'Advanced', gap: 'High' },
  { skill: 'Node.js', currentLevel: 'Intermediate', desiredLevel: 'Advanced', gap: 'Moderate' },
  { skill: 'Docker', currentLevel: 'Beginner', desiredLevel: 'Intermediate', gap: 'Moderate' },
];

export default function SkillGapReport() {
  const [skillGaps, setSkillGaps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate backend API fetch
    setTimeout(() => {
      setSkillGaps(dummySkillGaps);
      setLoading(false);
    }, 1000);

    // TODO: Replace this with actual backend API call (e.g., GET /api/skills/gaps)
  }, []);

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Skill Gap Report</h2>

      {loading ? (
        <div className="text-gray-500">Generating your skill gap report...</div>
      ) : skillGaps.length > 0 ? (
        <table className="w-full table-auto text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Skill</th>
              <th className="px-4 py-2">Current Level</th>
              <th className="px-4 py-2">Desired Level</th>
              <th className="px-4 py-2">Gap Severity</th>
            </tr>
          </thead>
          <tbody>
            {skillGaps.map((gap, idx) => (
              <tr key={idx} className="border-t">
                <td className="px-4 py-2">{gap.skill}</td>
                <td className="px-4 py-2">{gap.currentLevel}</td>
                <td className="px-4 py-2">{gap.desiredLevel}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      gap.gap === 'High'
                        ? 'bg-red-100 text-red-600'
                        : 'bg-yellow-100 text-yellow-600'
                    }`}
                  >
                    {gap.gap}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-gray-500">No skill gaps found! 🎉</div>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Integrate backend API to generate dynamic skill gap reports */}
      </div>
    </div>
  );
}
