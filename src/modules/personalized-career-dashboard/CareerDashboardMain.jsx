
import React from 'react';
import UserProgressOverview from './UserProgressOverview';
import UpcomingTasksPanel from './UpcomingTasksPanel';
import CareerStatsSummary from './CareerStatsSummary';
import AIRecommendedNextSteps from './AIRecommendedNextSteps';
import MilestoneTracker from './MilestoneTracker';
import SavedGoalsManager from './SavedGoalsManager';
import AIInsightsWidget from './AIInsightsWidget';
import ModuleQuickLinks from './ModuleQuickLinks';
import CareerDashboardTipsSidebar from './CareerDashboardTipsSidebar';

export default function CareerDashboardMain() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Your Personalized Career Dashboard</h1>

      <UserProgressOverview />
      <CareerStatsSummary />
      <UpcomingTasksPanel />
      <AIRecommendedNextSteps />
      <MilestoneTracker />
      <SavedGoalsManager />
      <AIInsightsWidget />
      <ModuleQuickLinks />
      <CareerDashboardTipsSidebar />
    </div>
  );
}
