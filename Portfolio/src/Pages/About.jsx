import React, { useState } from "react";
import ThreeScene from "../component/ThreeScene";
import ChatWindow from "../component/Chatbot/ChatWindow";
import { getBotReply } from "../component/Chatbot/botLogic";

const About = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleSend = (msg) => {
    const botReply = getBotReply(msg);
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: msg },
      { sender: "bot", text: botReply },
    ]);
  };

  return (
   <div className="relative w-full h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600 overflow-hidden">
  <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 text-center">
    <h1 className="text-6xl md:text-7xl font-extrabold mb-6 text-yellow-300 drop-shadow-lg animate-pulse">
      About Me
    </h1>
    <p className="text-lg md:text-xl max-w-2xl bg-white/20 p-6 rounded-xl shadow-lg backdrop-blur-sm text-gray-100">
      Hi! I am <span className="font-bold text-yellow-200">Amit</span>, a passionate 
      <span className="text-green-300 font-semibold"> React + MERN stack developer</span> 
      with 2.7 years of experience. I love building interactive, modern, and 
      <span className="text-pink-300 font-semibold"> AI-integrated web applications</span>.
    </p>
    <button
      onClick={() => setOpen(true)}
      className="mt-8 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
    >
      Chat with Me 🤖
    </button>
  </div>

  <ChatWindow
    isOpen={open}
    onClose={() => setOpen(false)}
    onSend={handleSend}
    messages={messages}
  />
</div>

  );
};

export default About;
