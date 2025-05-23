
import React, { useState } from 'react';

const ChatInput = ({ onSend, onClear})  => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
  e.preventDefault();
    if (input.trim() === '') return
    onSend(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="px-10 flex gap-2 items-center">
      <input
        type="text"
        className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Type a message or /command..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
      Send
      </button>
      <button
        type="button"
        onClick={onClear}
        className="px-3 py-2 border border-gray-400 text-sm rounded-xl text-gray-700 hover:bg-gray-100"
      >Clear History
      </button>
    </form>
  );
}    

export default ChatInput;
