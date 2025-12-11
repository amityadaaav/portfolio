import React, { useState } from "react";
import ThreeScene from "../Component/ThreeScene";
import ChatWindow from "../Component/Chatbot/ChatWindow";
import { getBotReply } from "../Component/Chatbot/botLogic";
import FloatingObjects from "../Component/FloatingObjects";

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleSend = (msg) => {
    const botReply = getBotReply(msg);
    setMessages([...messages, { sender: "user", text: msg }, { sender: "bot", text: botReply }]);
  };

  // Example project cards data
  const projects = [
    {
      name: "Portfolio Website",
      description: "My personal portfolio built with React + Three.js",
      repo: "https://github.com/amit-portfolio",
      live: "https://amit-portfolio.com",
    },
    {
      name: "E-commerce App",
      description: "MERN stack e-commerce web application",
      repo: "https://github.com/amit-ecommerce",
      live: "https://amit-ecommerce.com",
    },
    {
      name: "AI Chatbot",
      description: "Interactive AI chatbot with React + Node.js",
      repo: "https://github.com/amit-chatbot",
      live: "https://amit-chatbot.com",
    },
    {
      name: "Portfolio Website",
      description: "My personal portfolio built with React + Three.js",
      repo: "https://github.com/amit-portfolio",
      live: "https://amit-portfolio.com",
    },
    {
      name: "E-commerce App",
      description: "MERN stack e-commerce web application",
      repo: "https://github.com/amit-ecommerce",
      live: "https://amit-ecommerce.com",
    },
    {
      name: "AI Chatbot",
      description: "Interactive AI chatbot with React + Node.js",
      repo: "https://github.com/amit-chatbot",
      live: "https://amit-chatbot.com",
    },
    {
      name: "Portfolio Website",
      description: "My personal portfolio built with React + Three.js",
      repo: "https://github.com/amit-portfolio",
      live: "https://amit-portfolio.com",
    },
    {
      name: "E-commerce App",
      description: "MERN stack e-commerce web application",
      repo: "https://github.com/amit-ecommerce",
      live: "https://amit-ecommerce.com",
    },
    {
      name: "AI Chatbot",
      description: "Interactive AI chatbot with React + Node.js",
      repo: "https://github.com/amit-chatbot",
      live: "https://amit-chatbot.com",
    },
  ];

  return (
<div className="relative w-full h-screen overflow-auto bg-gradient-to-br from-purple-700 via-pink-600 to-indigo-700">
      
      {/* 3D Background */}
      {/* <ThreeScene onBotClick={() => setOpen(true)} /> */}
       {/* <FloatingObjects /> */}

      {/* Page Title */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 text-white text-5xl font-bold drop-shadow-lg">
        My Projects
      </div>

      {/* Projects Cards */}
      <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-full px-6 flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg w-80 hover:scale-105 transform transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-yellow-300 mb-2">{project.name}</h2>
            <p className="text-gray-200 mb-4">{project.description}</p>
            <div className="flex justify-between">
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-cyan-500 text-black rounded-md hover:bg-cyan-400 font-semibold"
              >
                Repo
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-yellow-400 text-purple-800 rounded-md hover:bg-yellow-500 font-semibold"
              >
                Live
              </a>
            </div>
          </div>
        ))}
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

export default Projects;
