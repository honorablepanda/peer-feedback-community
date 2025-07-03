
import React, { useState, useEffect } from 'react';

// Dummy contact data
const dummyContacts = [
  { id: 1, name: 'Sarah Lee', company: 'TechCorp', role: 'Recruiter', email: 'sarah@techcorp.com' },
  { id: 2, name: 'John Miller', company: 'InnoSoft', role: 'Hiring Manager', email: 'john@innosoft.com' },
];

export default function ContactManager() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setContacts(dummyContacts);
      setLoading(false);
    }, 700);
  }, []);

  const handleDelete = (id) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-lg font-semibold mb-3">Contact Manager</h2>

      {loading ? (
        <p>Loading contacts...</p>
      ) : contacts.length === 0 ? (
        <p>No contacts saved.</p>
      ) : (
        <ul className="space-y-3 text-sm">
          {contacts.map(contact => (
            <li key={contact.id} className="border p-2 rounded bg-gray-50 flex justify-between items-center">
              <div>
                <p className="font-medium">{contact.name} ({contact.role})</p>
                <p className="text-xs text-gray-500">{contact.company} - {contact.email}</p>
              </div>
              <button
                onClick={() => handleDelete(contact.id)}
                className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 text-xs"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Connect to backend contact management API later */}
      </div>
    </div>
  );
}
