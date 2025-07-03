
import React, { useEffect, useState } from 'react';

export default function PostLengthChecker({ content }) {
  const [wordCount, setWordCount] = useState(0);
  const [lengthStatus, setLengthStatus] = useState('');

  useEffect(() => {
    const words = content.trim().split(/\s+/).filter(Boolean);
    setWordCount(words.length);

    if (words.length < 30) {
      setLengthStatus('Too Short – Consider expanding your post for impact.');
    } else if (words.length > 150) {
      setLengthStatus('Too Long – Consider trimming for better engagement.');
    } else {
      setLengthStatus('✅ Ideal Length for Social Media Engagement.');
    }
  }, [content]);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold mb-3">Post Length Checker</h2>

      <p className="text-sm">
        <strong>Word Count:</strong> {wordCount}
      </p>
      <p className={\`text-sm \${lengthStatus.includes('✅') ? 'text-green-600' : 'text-red-600'}\`}>
        {lengthStatus}
      </p>

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Fine-tune word count rules based on platform best practices */}
      </div>
    </div>
  );
}
