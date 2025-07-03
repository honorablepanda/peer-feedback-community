import React, { useState } from 'react';
import ContentInputEditor from './ContentInputEditor';
import ToneStyleAnalyzer from './ToneStyleAnalyzer';
import EngagementPredictor from './EngagementPredictor';
import AIRewriteSuggestions from './AIRewriteSuggestions';
import AudienceTargetingHelper from './AudienceTargetingHelper';
import PostLengthChecker from './PostLengthChecker';
import SocialTipsSidebar from './SocialTipsSidebar';
import MultiToneOutputGenerator from './MultiToneOutputGenerator';
import SavedOptimizedPosts from './SavedOptimizedPosts';
import ExportOptimizedContent from './ExportOptimizedContent';

export default function SocialContentOptimizerDashboard() {
  const [userContent, setUserContent] = useState('');
  const [finalOptimizedContent, setFinalOptimizedContent] = useState('');

  const handleOptimization = () => {
    // Dummy placeholder logic for now
    setFinalOptimizedContent(`Optimized version of:\n\n${userContent}`);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Social & Content Optimizer</h1>

      <ContentInputEditor content={userContent} onChange={setUserContent} />

      <button
        onClick={handleOptimization}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Run AI Optimization
      </button>

      <ToneStyleAnalyzer content={userContent} />
      <EngagementPredictor content={userContent} />
      <AIRewriteSuggestions content={userContent} />
      <AudienceTargetingHelper content={userContent} />
      <PostLengthChecker content={userContent} />
      <SocialTipsSidebar />
      <MultiToneOutputGenerator content={userContent} />
      <SavedOptimizedPosts />
      <ExportOptimizedContent content={finalOptimizedContent} />
    </div>
  );
}
