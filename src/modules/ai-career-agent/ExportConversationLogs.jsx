import React from 'react';

// Dummy AI chat conversation logs
const dummyConversationLogs = [
  { id: 1, sender: 'User', message: 'Can you help me improve my resume?', date: '2025-06-20' },
  { id: 2, sender: 'AI', message: 'Sure! Here are a few suggestions to enhance your resume.', date: '2025-06-20' },
  { id: 3, sender: 'User', message: 'What are some common interview questions for software engineers?', date: '2025-06-22' },
  { id: 4, sender: 'AI', message: 'Here are some frequently asked interview questions for that role.', date: '2025-06-22' },
];

export default function ExportConversationLogs() {
  const handleExportCSV = () => {
    const headers = 'Sender,Message,Date';
    const rows = dummyConversationLogs.map(
      (log) => `${log.sender},"${log.message.replace(/"/g, '""')}",${log.date}`
    ).join('\n');
    const csvContent = `${headers}\n${rows}`;

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'AI_Conversation_Logs.csv';
    link.click();
  };

  const handleExportJSON = () => {
    const jsonContent = JSON.stringify(dummyConversationLogs, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'AI_Conversation_Logs.json';
    link.click();
  };

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Export AI Conversation Logs</h2>

      <div className="flex space-x-3">
        <button
          onClick={handleExportCSV}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
        >
          Export as CSV
        </button>

        <button
          onClick={handleExportJSON}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
        >
          Export as JSON
        </button>
      </div>

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace dummy logs with backend-generated AI conversation logs */}
      </div>
    </div>
  );
}
