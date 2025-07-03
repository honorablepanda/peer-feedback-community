import React from 'react';
import UserSkillProfile from './UserSkillProfile';
import SkillAssessmentForm from './SkillAssessmentForm';
import SkillGapReport from './SkillGapReport';
import LearningRecommendations from './LearningRecommendations';
import SkillComparisonChart from './SkillComparisonChart';
import SkillProgressTracker from './SkillProgressTracker';
import SavedAssessmentsManager from './SavedAssessmentsManager';
import AIRecommendationsWidget from './AIRecommendationsWidget';
import ExportSkillReport from './ExportSkillReport';

export default function SkillGapDashboard() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold mb-4">Skill Gap Analyzer Dashboard</h1>

      <UserSkillProfile />
      <SkillAssessmentForm />
      <SkillGapReport />
      <LearningRecommendations />
      <SkillComparisonChart />
      <SkillProgressTracker />
      <SavedAssessmentsManager />
      <AIRecommendationsWidget />
      <ExportSkillReport />

      <div className="mt-6 text-xs text-gray-500">
        {/* TODO: Wire up dashboard-level state management if needed for backend data coordination */}
      </div>
    </div>
  );
}
