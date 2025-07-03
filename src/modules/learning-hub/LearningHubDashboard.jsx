import React from 'react';
import CourseCatalog from './CourseCatalog';
import EnrollmentManager from './EnrollmentManager';
import ProgressTracker from './ProgressTracker';
import LearningRecommendations from './LearningRecommendations';
import UserCertificates from './UserCertificates';
import AIContentCurator from './AIContentCurator';
import LearningHistory from './LearningHistory';
import SavedCoursesManager from './SavedCoursesManager';
import ExportLearningProgress from './ExportLearningProgress';

export default function LearningHubDashboard() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold mb-6">Learning Hub Dashboard</h1>

      <CourseCatalog />
      <EnrollmentManager />
      <ProgressTracker />
      <LearningRecommendations />
      <UserCertificates />
      <AIContentCurator />
      <LearningHistory />
      <SavedCoursesManager />
      <ExportLearningProgress />

      <div className="mt-6 text-xs text-gray-500">
        {/* TODO: Add dashboard-wide state management if backend data coordination is needed */}
      </div>
    </div>
  );
}
