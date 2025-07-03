
import React, { useState, useEffect } from 'react';

// Dummy real-time feedback messages
const dummyFeedback = [
  { id: 1, author: 'User123', message: 'Great intro paragraph in your cover letter!' },
  { id: 2, author: 'CareerSeeker88', message: 'Consider quantifying your achievements more.' },
  { id: 3, author: 'JobHunter42', message: 'Your LinkedIn summary looks engaging!' },
];

export default function RealTimeFeedbackPanel() {
  const [feedbackMessages, setFeedbackMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate streaming new messages with intervals
    let index = 0;
    const interval = setInterval(() => {
      if (index < dummyFeedback.length) {
        setFeedbackMessages(prev => [...prev, dummyFeedback[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 1000);

    setLoading(false);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold mb-3">Live Peer Feedback</h2>

      {loading ? (
        <p>Loading feedback...</p>
      ) : (
        <ul className="space-y-2">
          {feedbackMessages.map(msg => (
            <li key={msg.id} className="border p-2 rounded bg-gray-50">
              <p className="font-medium">{msg.author}</p>
              <p className="text-sm">{msg.message}</p>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect to real-time backend (WebSocket, Firebase, etc.) later */}
        Simulated live feedback flow for now.
      </div>
    </div>
  );
}
