import React from 'react';
import UserAchievementsPanel from './UserAchievementsPanel';
import ChallengesList from './ChallengesList';
import RewardStore from './RewardStore';
import Leaderboard from './Leaderboard';
import ProgressBadges from './ProgressBadges';
import GameStatsSummary from './GameStatsSummary';
import SocialSharingPanel from './SocialSharingPanel';
import AIChallengeRecommendations from './AIChallengeRecommendations';
import ExportGameStats from './ExportGameStats';

export default function GamificationDashboard() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold mb-6">Career Gamification Dashboard</h1>

      <GameStatsSummary />
      <UserAchievementsPanel />
      <ProgressBadges />
      <ChallengesList />
      <AIChallengeRecommendations />
      <RewardStore />
      <Leaderboard />
      <SocialSharingPanel />
      <ExportGameStats />

      <div className="mt-6 text-xs text-gray-500">
        {/* TODO: Add dashboard-level state management if backend APIs need coordination across modules */}
      </div>
    </div>
  );
}
