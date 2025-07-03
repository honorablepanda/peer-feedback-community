import React, { useState } from 'react';

// Dummy initial chat history
const dummyInitialMessages = [
  { id: 1, sender: 'AI', text: 'Hello! How can I assist you with your career today?' },
];

export default function ChatInterface() {
  const [messages, setMessages] = useState(dummyInitialMessages);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    const userMessage = { id: messages.length + 1, sender: 'User', text: userInput };
    setMessages((prev) => [...prev, userMessage]);
    setUserInput('');
    setLoading(true);

    // Simulate AI reply delay
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        sender: 'AI',
        text: `AI Response to: "${userMessage.text}"`,
      };
      setMessages((prev) => [...prev, aiResponse]);
      setLoading(false);
    }, 1000);

    // TODO: Replace with backend API POST (e.g., POST /api/ai/chat)
  };

  return (
    <div className="p-6 border rounded shadow-md bg-white flex flex-col space-y-4">
      <h2 className="text-xl font-semibold">AI Chat Interface</h2>

      <div className="flex flex-col space-y-2 max-h-64 overflow-y-auto border p-3 rounded bg-gray-50 text-sm">
        {messages.map((msg) => (
          <div key={msg.id} className={msg.sender === 'AI' ? 'text-purple-700' : 'text-gray-800'}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}

        {loading && <div className="text-gray-500">AI is typing...</div>}
      </div>

      <div className="flex space-x-2">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow border rounded p-2 text-sm"
        />
        <button
          onClick={handleSendMessage}
          disabled={loading || !userInput.trim()}
          className={`px-4 py-2 text-sm rounded text-white ${
            loading || !userInput.trim() ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          Send
        </button>
      </div>

      <div className="text-xs text-gray-500">
        {/* TODO: Connect this chat interface to backend AI conversation API */}
      </div>
    </div>
  );
}
