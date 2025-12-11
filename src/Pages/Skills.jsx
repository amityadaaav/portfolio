import React, { useState } from "react";
import ThreeScene from "../Component/ThreeScene";
import ChatWindow from "../Component/Chatbot/ChatWindow";
import { getBotReply } from "../Component/Chatbot/botLogic";

import { FaReact, FaNodeJs, FaJsSquare, FaGitAlt, FaCode } from "react-icons/fa";
import { 
  SiRedux, 
  SiExpress, 
  SiTailwindcss, 
  SiMongodb, 
  SiFirebase,
  SiVscodium 
} from "react-icons/si";

const Skills = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleSend = (msg) => {
    const botReply = getBotReply(msg);
    setMessages((prev) => [...prev, { sender: "user", text: msg }, { sender: "bot", text: botReply }]);
  };

  // ---------------- MAIN SKILLS ----------------
  const mainSkills = [
    { name: "React.js", icon: <FaReact size={40} /> },
    { name: "Redux", icon: <SiRedux size={40} /> },
    { name: "JavaScript", icon: <FaJsSquare size={40} /> },
    { name: "Node.js", icon: <FaNodeJs size={40} /> },
    { name: "Express.js", icon: <SiExpress size={40} /> },
    { name: "MongoDB", icon: <SiMongodb size={40} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
  ];

  // ---------------- BACKEND SKILLS ----------------
  const backendSkills = [
    { name: "REST APIs", icon: <FaCode size={35} /> },
    { name: "JWT Auth", icon: <FaCode size={35} /> },
    { name: "Multer", icon: <FaCode size={35} /> },
  ];

  // ---------------- TOOLS ----------------
  const tools = [
    { name: "Git", icon: <FaGitAlt size={35} /> },
    { name: "VS Code", icon: <SiVscodium size={35} /> }, // BEST replacement
    { name: "Firebase", icon: <SiFirebase size={35} /> },
    { name: "Axios", icon: <FaCode size={35} /> },
  ];

  const renderCategory = (title, items) => (
    <div className="mt-10">
      <h2 className="text-4xl font-bold text-yellow-300 drop-shadow-md mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {items.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-br from-green-400 via-blue-400 to-purple-500 shadow-lg text-white font-semibold transform hover:scale-110 transition-all duration-300 cursor-pointer"
          >
            {skill.icon}
            <span className="mt-3 text-lg">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600 overflow-auto p-6">
      <div className="flex flex-col items-center text-white text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold text-yellow-300 drop-shadow-lg animate-pulse">
          My Skills
        </h1>

        {renderCategory("Main Skills", mainSkills)}
        {renderCategory("Backend Skills", backendSkills)}
        {renderCategory("Tools", tools)}

        <button
          onClick={() => setOpen(true)}
          className="mt-10 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          Chat with Me 🤖
        </button>
      </div>

      <ChatWindow isOpen={open} onClose={() => setOpen(false)} onSend={handleSend} messages={messages} />
    </div>
  );
};

export default Skills;
