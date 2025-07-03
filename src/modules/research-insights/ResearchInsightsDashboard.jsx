
import React, { useState } from 'react';
import CompanyInsightsPanel from './CompanyInsightsPanel';
import IndustryTrendsOverview from './IndustryTrendsOverview';
import JobMarketDataExplorer from './JobMarketDataExplorer';
import AIResearchSummary from './AIResearchSummary';
import SavedInsightsManager from './SavedInsightsManager';
import CompanyComparisonTool from './CompanyComparisonTool';
import ResearchQueryBuilder from './ResearchQueryBuilder';
import AIResearchTipsSidebar from './AIResearchTipsSidebar';
import ResearchHistoryPanel from './ResearchHistoryPanel';
import ExportInsightsOptions from './ExportInsightsOptions';

export default function ResearchInsightsDashboard() {
  const [dummyExportContent, setDummyExportContent] = useState('This is a sample research insight summary...');

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Research & Insights Dashboard</h1>

      <CompanyInsightsPanel />
      <IndustryTrendsOverview />
      <JobMarketDataExplorer />
      <AIResearchSummary />
      <SavedInsightsManager />
      <CompanyComparisonTool />
      <ResearchQueryBuilder />
      <AIResearchTipsSidebar />
      <ResearchHistoryPanel />
      <ExportInsightsOptions content={dummyExportContent} />
    </div>
  );
}
