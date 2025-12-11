import React, { useState } from "react";
import ThreeScene from "../Component/ThreeScene";
import ChatWindow from "../Component/Chatbot/ChatWindow";
import { getBotReply } from "../Component/Chatbot/botLogic";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSend = (msg) => {
    const botReply = getBotReply(msg);
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: msg },
      { sender: "bot", text: botReply },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${formData.name}, your message has been sent!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600 flex flex-col md:flex-row overflow-hidden">

      {/* Left: Contact Form */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 md:px-12 py-10 z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-yellow-300 drop-shadow-lg animate-pulse">
          Contact Me
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-md text-white"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 placeholder-white text-white"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 placeholder-white text-white"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Your Message"
            className="p-3 rounded-lg bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 placeholder-white text-white"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />

          <button
            type="submit"
            className="p-3 mt-2 bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        <button
          onClick={() => setOpen(true)}
          className="mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          Chat with Me 🤖
        </button>
      </div>

      {/* Right: 3D Canvas */}
      <div className="flex-1 relative z-0 min-w-0">
        <ThreeScene onBotClick={() => setOpen(true)} />
      </div>

      {/* Chat Window */}
      <ChatWindow
        isOpen={open}
        onClose={() => setOpen(false)}
        onSend={handleSend}
        messages={messages}
      />
    </div>
  );
};

export default Contact;
