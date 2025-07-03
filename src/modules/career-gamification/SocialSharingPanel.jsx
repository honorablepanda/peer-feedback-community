import React from 'react';

export default function SocialSharingPanel() {
  const handleShare = (platform) => {
    alert(`Simulated sharing to ${platform}!`);
    // TODO: Integrate real social sharing APIs (e.g., LinkedIn, Twitter, Facebook)
  };

  return (
    <div className="p-6 border rounded shadow-md bg-blue-50">
      <h2 className="text-xl font-semibold mb-4">Share Your Achievements</h2>

      <p className="text-sm text-gray-600 mb-3">
        Let your network know about your career achievements and milestones!
      </p>

      <div className="flex space-x-3">
        <button
          onClick={() => handleShare('LinkedIn')}
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 text-sm"
        >
          Share on LinkedIn
        </button>

        <button
          onClick={() => handleShare('Twitter')}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm"
        >
          Share on Twitter
        </button>

        <button
          onClick={() => handleShare('Facebook')}
          className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 text-sm"
        >
          Share on Facebook
        </button>
      </div>

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Implement real social sharing integration */}
      </div>
    </div>
  );
}
