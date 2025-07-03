import React, { useState } from 'react';

export default function SkillAssessmentForm() {
  const [formData, setFormData] = useState({
    skillName: '',
    proficiencyLevel: '',
    yearsOfExperience: '',
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation logic
    if (!formData.skillName || !formData.proficiencyLevel || !formData.yearsOfExperience) {
      setErrorMessage('Please complete all fields.');
      return;
    }

    setErrorMessage('');
    setLoading(true);

    // Simulated submission (replace with actual API call later)
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage(`Skill "${formData.skillName}" assessment saved successfully.`);
      setFormData({
        skillName: '',
        proficiencyLevel: '',
        yearsOfExperience: '',
      });
    }, 1000);

    // TODO: Replace setTimeout with backend API POST request (e.g., POST /api/skills/assessment)
  };

  return (
    <div className="p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Skill Assessment Form</h2>

      {errorMessage && (
        <div className="mb-3 text-red-600 text-sm">
          {errorMessage}
        </div>
      )}

      {successMessage && (
        <div className="mb-3 text-green-600 text-sm">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Skill Name</label>
          <input
            type="text"
            name="skillName"
            value={formData.skillName}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 shadow-sm rounded-md p-2 border"
            placeholder="e.g., JavaScript"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Proficiency Level</label>
          <select
            name="proficiencyLevel"
            value={formData.proficiencyLevel}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 shadow-sm rounded-md p-2 border"
          >
            <option value="">Select level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Years of Experience</label>
          <input
            type="number"
            name="yearsOfExperience"
            value={formData.yearsOfExperience}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 shadow-sm rounded-md p-2 border"
            placeholder="e.g., 3"
            min="0"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 rounded-md shadow-sm text-white font-semibold ${
            loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? 'Submitting...' : 'Submit Assessment'}
        </button>
      </form>

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace dummy submission logic with backend integration */}
      </div>
    </div>
  );
}
