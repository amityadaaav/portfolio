import React, { useState } from "react";
import ChatWindow from "../Component/Chatbot/ChatWindow";
import { getBotReply } from "../Component/Chatbot/botLogic";

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
    <>
      {/* ================= ABOUT HEADER SECTION ================= */}
      <div className="relative w-full h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600 overflow-hidden">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 text-yellow-300 drop-shadow-lg animate-pulse">
            About Me
          </h1>

          <p className="text-lg md:text-xl max-w-2xl bg-white/20 p-6 rounded-xl shadow-lg backdrop-blur-sm text-gray-100">
            Hi! I am <span className="font-bold text-yellow-200">Amit</span>, a passionate{" "}
            <span className="text-green-300 font-semibold">React + MERN stack developer</span>{" "}
            with 2.7 years of experience. I love building interactive, modern, and{" "}
            <span className="text-pink-300 font-semibold">AI-integrated web applications</span>.
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

      {/* ================= TIMELINE SECTION ================= */}
<div className="w-full py-20 px-6 bg-black text-white overflow-hidden">

  <div className="max-w-5xl mx-auto">

    <h2 className="text-4xl font-extrabold mb-12 text-center text-yellow-300">
      Experience & Education
    </h2>

    <div className="relative md:border-l-4 border-gray-600 md:pl-10">

      {/* ================= EXPERIENCE ================= */}
      <h3 className="text-3xl font-bold text-pink-300 mb-6">Work Experience</h3>

      {/* === JOB 1 === */}
      <div className="mb-12 relative">

        {/* Date (Mobile Top - No overflow) */}
        <div className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold inline-block mb-3">
          07/2022 – Present
        </div>

        {/* Date (Desktop Left) */}
        <div className="hidden md:block absolute -left-40 top-1 bg-blue-600 text-white px-4 py-3 rounded-r-lg font-bold shadow-lg w-36 text-center">
          07/2022 – Present
        </div>

        {/* Dot for Desktop */}
        <span className="hidden md:block absolute -left-3 top-3 w-5 h-5 bg-white rounded-full border-4 border-gray-800"></span>

        {/* Content */}
        <h4 className="text-2xl font-bold">Software Developer</h4>
        <p className="text-blue-400 font-semibold">Mphasis · Full-time</p>

        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li>Working for HP client on enterprise-level apps.</li>
          <li>Built scalable React + Node projects.</li>
          <li>Improved UI performance and reusable Components.</li>
        </ul>
      </div>

      {/* === JOB 2 === */}
      <div className="mb-12 relative">

        {/* Mobile date */}
        <div className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold inline-block mb-3">
          01/2022 – 06/2022
        </div>

        {/* Left date box */}
        <div className="hidden md:block absolute -left-40 top-1 bg-blue-600 text-white px-4 py-3 rounded-r-lg font-bold shadow-lg w-36 text-center">
          01/2022 – 06/2022
        </div>

        {/* Dot */}
        <span className="hidden md:block absolute -left-3 top-3 w-5 h-5 bg-white rounded-full border-4 border-gray-800"></span>

        <h4 className="text-2xl font-bold">Web Developer Intern</h4>
        <p className="text-blue-400 font-semibold">XYZ Pvt Ltd · Internship</p>

        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li>Built dashboards using React + API integration.</li>
          <li>Enhanced UI responsiveness and design.</li>
        </ul>
      </div>

      {/* ================= EDUCATION ================= */}
      <h3 className="text-3xl font-bold text-green-300 mt-16 mb-6">Education</h3>

      {/* === EDU 1 === */}
      <div className="mb-12 relative">

        {/* Mobile Date */}
        <div className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold inline-block mb-3">
          2018 – 2022
        </div>

        {/* Desktop Date */}
        <div className="hidden md:block absolute -left-40 top-1 bg-blue-600 text-white px-4 py-3 rounded-r-lg font-bold shadow-lg w-36 text-center">
          2018 – 2022
        </div>

        {/* Dot */}
        <span className="hidden md:block absolute -left-3 top-3 w-5 h-5 bg-white rounded-full border-4 border-gray-800"></span>

        <h4 className="text-2xl font-bold">B.Tech in Computer Science</h4>
        <p className="text-blue-400 font-semibold">ABC University</p>

        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li>Strong CS fundamentals with MERN projects.</li>
        </ul>
      </div>

      {/* === EDU 2 === */}
      <div className="mb-4 relative">

        <div className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold inline-block mb-3">
          2016 – 2018
        </div>

        <div className="hidden md:block absolute -left-40 top-1 bg-blue-600 text-white px-4 py-3 rounded-r-lg font-bold shadow-lg w-36 text-center">
          2016 – 2018
        </div>

        <span className="hidden md:block absolute -left-3 top-3 w-5 h-5 bg-white rounded-full border-4 border-gray-800"></span>

        <h4 className="text-2xl font-bold">Intermediate (PCM)</h4>
        <p className="text-blue-400 font-semibold">XYZ Senior Secondary School</p>

        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li>Completed 12th PCM with 1st division.</li>
        </ul>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default About;
