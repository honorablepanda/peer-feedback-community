import React from 'react';
import SalaryComparisonChart from './SalaryComparisonChart';
import LocationSalaryHeatmap from './LocationSalaryHeatmap';
import IndustrySalaryTrends from './IndustrySalaryTrends';
import SalaryNegotiationTips from './SalaryNegotiationTips';
import SavedSalaryReports from './SavedSalaryReports';
import AICompensationInsights from './AICompensationInsights';
import SalaryForecast from './SalaryForecast';
import JobRoleSalaryExplorer from './JobRoleSalaryExplorer';
import ExportSalaryData from './ExportSalaryData';

export default function SalaryDashboard() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold mb-6">Salary Intelligence Dashboard</h1>

      <SalaryComparisonChart />
      <LocationSalaryHeatmap />
      <IndustrySalaryTrends />
      <SalaryNegotiationTips />
      <SavedSalaryReports />
      <AICompensationInsights />
      <SalaryForecast />
      <JobRoleSalaryExplorer />
      <ExportSalaryData />

      <div className="mt-6 text-xs text-gray-500">
        {/* TODO: Add dashboard-level state management if backend data needs to flow across components */}
      </div>
    </div>
  );
}
