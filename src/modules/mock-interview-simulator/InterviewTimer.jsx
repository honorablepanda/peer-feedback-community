
import React, { useState, useEffect } from 'react';

export default function InterviewTimer() {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes per question

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return \`\${min}:\${sec.toString().padStart(2, '0')}\`;
  };

  return (
    <div className="p-4 border rounded shadow-md bg-yellow-50 mt-6">
      <h3 className="text-lg font-semibold mb-2">Time Remaining</h3>
      <p className="text-2xl font-bold">{formatTime(timeLeft)}</p>

      <div className="mt-2 text-xs text-gray-500">
        {/* TODO: Optionally adjust time per question based on difficulty */}
        Countdown timer for your response.
      </div>
    </div>
  );
}
