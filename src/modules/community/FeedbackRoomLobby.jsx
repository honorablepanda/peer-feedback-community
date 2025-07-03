
import React, { useState, useEffect } from 'react';

// Dummy feedback rooms data
const dummyRooms = [
  { id: 1, name: 'Resume Review Room', participants: 5 },
  { id: 2, name: 'STAR Story Workshop', participants: 3 },
  { id: 3, name: 'Cover Letter Feedback Hub', participants: 7 },
];

export default function FeedbackRoomLobby() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to load rooms
    setTimeout(() => {
      setRooms(dummyRooms);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold mb-3">Live Feedback Rooms</h2>

      {loading ? (
        <p>Loading available rooms...</p>
      ) : rooms.length === 0 ? (
        <p>No rooms available at the moment.</p>
      ) : (
        <ul className="space-y-3">
          {rooms.map(room => (
            <li key={room.id} className="border p-3 rounded bg-gray-50 flex justify-between items-center">
              <div>
                <p className="font-medium">{room.name}</p>
                <p className="text-xs text-gray-500">{room.participants} participants</p>
              </div>
              <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                Join Room
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3 text-xs text-gray-500">
        {/* TODO: Replace with real-time backend room listing */}
        Browse and join active peer feedback rooms.
      </div>
    </div>
  );
}
