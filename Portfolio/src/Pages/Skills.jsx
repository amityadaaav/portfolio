import React, { useState } from "react";
import ThreeScene from "../component/ThreeScene";
import ChatWindow from "../component/Chatbot/ChatWindow";
import { getBotReply } from "../component/Chatbot/botLogic";
import { FaReact, FaNodeJs, FaJsSquare, FaDatabase } from "react-icons/fa";
import { SiRedux, SiExpress } from "react-icons/si";

const Skills = () => {
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

  const skills = [
    { name: "React.js", icon: <FaReact size={40} /> },
    { name: "Redux", icon: <SiRedux size={40} /> },
    { name: "JavaScript", icon: <FaJsSquare size={40} /> },
    { name: "Node.js", icon: <FaNodeJs size={40} /> },
    { name: "Express.js", icon: <SiExpress size={40} /> },
    { name: "MongoDB", icon: <FaDatabase size={40} /> },
  ];

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600 overflow-hidden">
      {/* Optional: <ThreeScene onBotClick={() => setOpen(true)} /> */}

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 text-yellow-300 drop-shadow-lg animate-pulse">
          My Skills
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-br from-green-400 via-blue-400 to-purple-500 shadow-lg text-white font-semibold cursor-pointer transform hover:scale-110 transition-all duration-300"
            >
              {skill.icon}
              <span className="mt-3 text-lg">{skill.name}</span>
            </div>
          ))}
        </div>

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

export default Skills;
