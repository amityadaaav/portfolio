import React, { useState } from "react";

const ChatWindow = ({ isOpen, onClose, onSend, messages }) => {
  const [input, setInput] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-10 right-10 w-80 bg-[#1e1e2f] p-4 rounded-xl shadow-xl border border-gray-700 z-50">
      <div className="flex justify-between mb-2">
        <h2 className="text-white text-lg font-semibold">AI Chatbot</h2>
        <button className="text-gray-300 hover:text-white" onClick={onClose}>X</button>
      </div>

      <div className="h-64 overflow-y-auto bg-black/20 p-2 rounded-lg text-white">
        {messages?.map((msg, i) => (
          <p key={i} className={`my-1 p-2 rounded-lg ${msg.sender === "user" ? "bg-blue-600 text-right" : "bg-gray-700 text-left"}`}>
            {msg.text}
          </p>
        ))}
      </div>

      <div className="mt-3 flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 rounded-l-lg bg-gray-900 text-white"
          placeholder="Ask me anything..."
        />
        <button className="p-2 bg-blue-600 rounded-r-lg text-white"
          onClick={() => { onSend(input); setInput(""); }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
