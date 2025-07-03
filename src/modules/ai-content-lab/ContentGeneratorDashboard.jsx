
import React, { useState } from 'react';
import ContentTemplateSelector from './ContentTemplateSelector';
import ToneSelector from './ToneSelector';
import PromptBuilder from './PromptBuilder';
import AIOutputPreview from './AIOutputPreview';
import HistoryPanel from './HistoryPanel';
import SavedContentManager from './SavedContentManager';
import MultiOutputComparer from './MultiOutputComparer';
import AIContentTipsSidebar from './AIContentTipsSidebar';
import UploadInputPanel from './UploadInputPanel';
import ExportContentOptions from './ExportContentOptions';

export default function ContentGeneratorDashboard() {
  const [selectedTemplate, setSelectedTemplate] = useState('LinkedIn Post');
  const [selectedTone, setSelectedTone] = useState('Professional');
  const [promptText, setPromptText] = useState('');
  const [generatedOutput, setGeneratedOutput] = useState('');

  const handleGenerate = () => {
    // Dummy AI content simulation
    const dummyOutput = \`Generated \${selectedTemplate} in \${selectedTone} tone:\n\n"\${promptText}"\n\n[AI-enhanced version]\`;
    setGeneratedOutput(dummyOutput);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">AI Content Lab</h1>

      <ContentTemplateSelector selected={selectedTemplate} onSelect={setSelectedTemplate} />
      <ToneSelector selected={selectedTone} onSelect={setSelectedTone} />
      <UploadInputPanel />
      <PromptBuilder value={promptText} onChange={setPromptText} />

      <button
        onClick={handleGenerate}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Generate AI Content
      </button>

      <AIOutputPreview output={generatedOutput} />
      <ExportContentOptions output={generatedOutput} />
      <MultiOutputComparer />
      <HistoryPanel />
      <SavedContentManager />
      <AIContentTipsSidebar />
    </div>
  );
}
