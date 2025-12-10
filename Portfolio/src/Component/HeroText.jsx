import { motion } from "framer-motion";

const HeroText = () => {
  return (
    <div className="absolute top-1/3 left-[10%] text-white z-20">
      {/* Optional: subtle overlay for better readability */}
      <div className="absolute inset-0 bg-black/30 z-10 rounded-lg"></div>

      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="text-yellow-300">Hi, I’m</span>{" "}
        <span className="text-cyan-400">Amit</span>
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl mb-6 text-white drop-shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        React + MERN Stack Developer
      </motion.p>

      <motion.button
        className="px-6 py-3 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-black font-semibold rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        View Projects
      </motion.button>
    </div>
  );
};

export default HeroText;
