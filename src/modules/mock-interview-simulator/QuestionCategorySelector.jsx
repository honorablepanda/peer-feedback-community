
import React, { useState } from 'react';

// Dummy categories
const categories = ['Behavioral', 'Technical', 'Situational', 'Leadership', 'General HR'];

export default function QuestionCategorySelector() {
  const [selectedCategory, setSelectedCategory] = useState('Behavioral');

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-lg font-semibold mb-2">Select Question Category</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={\`px-3 py-1 rounded border \${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}\`}
          >
            {category}
          </button>
        ))}
      </div>

      <p className="mt-2 text-xs text-gray-500">
        {/* TODO: Connect category selection to actual question fetching later */}
        Currently selected: {selectedCategory}
      </p>
    </div>
  );
}
