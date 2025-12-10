import { memo } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-white tracking-wide">
          AMIT<span className="text-blue-400">.DEV</span>
        </h1>

        {/* Menu Links */}
        <div className="space-x-6 text-white font-medium hidden md:flex">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/about">About</Link>
        </div>

      </div>
    </nav>
  );
};

export default memo(Navbar);
