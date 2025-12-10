import React, { useState } from "react";
import { motion } from "framer-motion";
import ThreeScene from "../Component/ThreeScene";
import HeroText from "../Component/HeroText";
import ChatWindow from "../Component/Chatbot/ChatWindow";
import { getBotReply } from "../Component/Chatbot/botLogic";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleSend = (msg) => {
    const botReply = getBotReply(msg);
    setMessages([...messages, { sender: "user", text: msg }, { sender: "bot", text: botReply }]);
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600 flex flex-col md:flex-row overflow-hidden">

      {/* Left side: HeroText + Profile Image */}
      <div className="flex-1 flex flex-col justify-center items-start px-12 gap-6 z-10 max-w-lg">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <HeroText />
        </motion.div>

        {/* Profile Image */}
        
      </div>

      {/* Right side: 3D Canvas */}
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

export default Home;
