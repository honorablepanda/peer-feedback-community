
import React from 'react';
import ApplicationStageBoard from './ApplicationStageBoard';
import NewApplicationForm from './NewApplicationForm';
import ApplicationDetailView from './ApplicationDetailView';
import ContactManager from './ContactManager';
import CommunicationLog from './CommunicationLog';
import ApplicationFiltersSidebar from './ApplicationFiltersSidebar';
import AIApplicationInsights from './AIApplicationInsights';
import SavedSearchesManager from './SavedSearchesManager';
import ExportApplications from './ExportApplications';

export default function ApplicationTrackerDashboard() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Application Tracker & CRM</h1>

      <ApplicationFiltersSidebar />
      <ApplicationStageBoard />
      <NewApplicationForm />
      <ApplicationDetailView />
      <ContactManager />
      <CommunicationLog />
      <AIApplicationInsights />
      <SavedSearchesManager />
      <ExportApplications />
    </div>
  );
}
