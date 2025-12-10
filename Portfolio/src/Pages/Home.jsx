import React, { useState } from "react";
import ThreeScene from "../Component/ThreeScene";
import HeroText from "../Component/HeroText";

import ChatWindow from "../Component/Chatbot/ChatWindow";
import { getBotReply } from "../Component/Chatbot/botLogic";
import { motion } from "framer-motion";

const Home = () => {
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
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-purple-700 via-pink-600 to-indigo-700">
      
      {/* Side-by-side container */}
      <div className="flex w-full h-full">
        {/* Left: 3D Canvas */}
        <div className="w-1/2 h-full">
          <ThreeScene onBotClick={() => setOpen(true)} />
        </div>

        {/* Right: Hero Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-1/2 flex flex-col justify-center items-start px-16 text-left"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-red-400 to-pink-300 drop-shadow-lg animate-pulse">
            Hi, I'm Amit
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 text-xl md:text-2xl text-white drop-shadow-md"
          >
            React + MERN Stack Developer | Building interactive & AI web apps
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen(true)}
            className="mt-8 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-bold rounded-full shadow-lg"
          >
            Chat with Me 🤖
          </motion.button>
        </motion.div>
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

export default Home;
