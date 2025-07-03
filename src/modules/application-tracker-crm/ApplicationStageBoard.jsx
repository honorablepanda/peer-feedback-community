
import React, { useState } from 'react';

// Dummy application data
const initialApplications = {
  Applied: [
    { id: 1, title: 'Software Engineer', company: 'TechCorp' },
    { id: 2, title: 'Product Manager', company: 'InnoSoft' },
  ],
  Interviewing: [
    { id: 3, title: 'Data Analyst', company: 'DataWorks' },
  ],
  Offer: [],
  Rejected: [
    { id: 4, title: 'QA Tester', company: 'QualityHub' },
  ],
};

export default function ApplicationStageBoard() {
  const [applications, setApplications] = useState(initialApplications);

  const handleDummyDrag = (appId, fromStage, toStage) => {
    const appToMove = applications[fromStage].find(app => app.id === appId);
    if (!appToMove) return;

    setApplications(prev => {
      const updated = { ...prev };
      updated[fromStage] = updated[fromStage].filter(app => app.id !== appId);
      updated[toStage] = [...updated[toStage], appToMove];
      return updated;
    });
  };

  const stages = Object.keys(applications);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-3">Application Stage Board</h2>

      <div className="flex space-x-4">
        {stages.map(stage => (
          <div key={stage} className="w-64 min-w-[16rem] border rounded p-2 bg-gray-50">
            <h3 className="text-lg font-medium mb-2">{stage}</h3>
            <div className="space-y-2">
              {applications[stage].map(app => (
                <div key={app.id} className="p-2 border rounded bg-white shadow-sm">
                  <p className="font-semibold">{app.title}</p>
                  <p className="text-xs text-gray-500">{app.company}</p>

                  {/* Dummy drag buttons */}
                  <div className="mt-2 space-x-1 text-xs">
                    {stages.filter(s => s !== stage).map(targetStage => (
                      <button
                        key={targetStage}
                        onClick={() => handleDummyDrag(app.id, stage, targetStage)}
                        className="bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200"
                      >
                        Move to {targetStage}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace with true drag-and-drop + backend API later */}
        Drag and drop simulation using buttons for now.
      </div>
    </div>
  );
}
