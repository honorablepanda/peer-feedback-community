
import React, { useState, useEffect } from 'react';

// Dummy weekly digest data
const dummyDigest = {
  commentsGiven: 12,
  repliesReceived: 5,
  upvotesEarned: 18,
  newBadges: ['Active Contributor', 'Helpful Reviewer'],
};

export default function WeeklyDigestPreview() {
  const [digest, setDigest] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API delay
    setTimeout(() => {
      setDigest(dummyDigest);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold mb-3">Your Weekly Feedback Digest</h2>

      {loading ? (
        <p>Loading weekly summary...</p>
      ) : digest ? (
        <div className="space-y-2">
          <p><strong>Comments Given:</strong> {digest.commentsGiven}</p>
          <p><strong>Replies Received:</strong> {digest.repliesReceived}</p>
          <p><strong>Upvotes Earned:</strong> {digest.upvotesEarned}</p>

          <div>
            <p className="font-semibold">New Badges:</p>
            <ul className="list-disc pl-5 text-sm">
              {digest.newBadges.map((badge, idx) => (
                <li key={idx}>{badge}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>No digest available for this week.</p>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace with backend API-generated digest */}
        Weekly summary based on your feedback activity.
      </div>
    </div>
  );
}
