
import React, { useState, useEffect } from 'react';

// Dummy engagement prediction result
const dummyPrediction = {
  engagementLevel: 'High',
  predictedClicks: 150,
  predictedLikes: 300,
  predictedShares: 40,
};

export default function EngagementPredictor({ content }) {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (content.trim()) {
      setLoading(true);
      // Simulate AI prediction delay
      setTimeout(() => {
        setPrediction(dummyPrediction);
        setLoading(false);
      }, 800);
    } else {
      setPrediction(null);
      setLoading(false);
    }
  }, [content]);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold mb-3">Engagement Predictor</h2>

      {loading ? (
        <p>Calculating engagement predictions...</p>
      ) : prediction ? (
        <div className="space-y-2 text-sm">
          <p><strong>Predicted Engagement Level:</strong> {prediction.engagementLevel}</p>
          <p><strong>Predicted Clicks:</strong> {prediction.predictedClicks}</p>
          <p><strong>Predicted Likes:</strong> {prediction.predictedLikes}</p>
          <p><strong>Predicted Shares:</strong> {prediction.predictedShares}</p>
        </div>
      ) : (
        <p>Enter content above to predict engagement.</p>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace with backend AI prediction later */}
      </div>
    </div>
  );
}
