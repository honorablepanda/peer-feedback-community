
import React from 'react';

// Dummy quick link targets
const modules = [
  { name: 'Resume Builder', path: '/resume-builder' },
  { name: 'Job Finder Pro', path: '/job-finder-pro' },
  { name: 'Mock Interview Simulator', path: '/mock-interview-simulator' },
  { name: 'AI Content Lab', path: '/ai-content-lab' },
  { name: 'Career Journey Planner', path: '/career-journey-planner' },
];

export default function ModuleQuickLinks() {
  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-lg font-semibold mb-3">Quick Module Links</h2>

      <ul className="space-y-2 text-sm">
        {modules.map((module, idx) => (
          <li key={idx}>
            <a
              href={module.path}
              className="text-blue-600 hover:underline"
            >
              {module.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Adjust URLs when routing is finalized */}
      </div>
    </div>
  );
}
