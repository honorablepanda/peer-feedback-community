import React from 'react';
import ChatInterface from './ChatInterface';
import GoalSettingPanel from './GoalSettingPanel';
import CareerAdviceFeed from './CareerAdviceFeed';
import InterviewPrepAssistant from './InterviewPrepAssistant';
import ResumeReviewAssistant from './ResumeReviewAssistant';
import JobMatchRecommendations from './JobMatchRecommendations';
import SavedInteractionsManager from './SavedInteractionsManager';
import AIAnalyticsDashboard from './AIAnalyticsDashboard';
import ExportConversationLogs from './ExportConversationLogs';

export default function AICareerAgentDashboard() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold mb-6">AI Career Agent Dashboard</h1>

      <ChatInterface />
      <GoalSettingPanel />
      <CareerAdviceFeed />
      <InterviewPrepAssistant />
      <ResumeReviewAssistant />
      <JobMatchRecommendations />
      <SavedInteractionsManager />
      <AIAnalyticsDashboard />
      <ExportConversationLogs />

      <div className="mt-6 text-xs text-gray-500">
        {/* TODO: Add dashboard-level state management if backend APIs require coordination across modules */}
      </div>
    </div>
  );
}
