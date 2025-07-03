
import React, { useState } from 'react';

export default function UploadInputPanel() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-lg font-semibold mb-3">Upload Input File (Optional)</h2>

      <input
        type="file"
        accept=".txt,.pdf,.docx"
        onChange={handleFileChange}
        className="block mb-2"
      />

      {selectedFile && (
        <p className="text-sm text-gray-700">Selected File: {selectedFile.name}</p>
      )}

      <div className="mt-2 text-xs text-gray-500">
        {/* TODO: Implement backend file handling after API phase */}
        File will be used as input context for AI (when backend is ready).
      </div>
    </div>
  );
}
