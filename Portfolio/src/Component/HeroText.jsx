import { motion } from "framer-motion";

const HeroText = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      
      {/* Text Section */}
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-red-400 to-pink-300 drop-shadow-lg">
          Hi, I'm Amit
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-white drop-shadow-md">
          React + MERN Stack Developer | Building interactive & AI web apps
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-bold rounded-full shadow-lg"
        >
          Chat with Me 🤖
        </motion.button>
      </motion.div>

      {/* Profile Image Section */}
      <motion.img
        src="/shared image (1).jpg"
        alt="Amit Yadav"
        className="w-48 h-48 md:w-54 md:h-54 rounded-full border-4 border-yellow-300 shadow-xl object-cover"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      />
    </div>
  );
};

export default HeroText;
