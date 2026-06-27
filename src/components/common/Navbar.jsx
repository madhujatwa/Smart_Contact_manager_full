import { Link } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

import {
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const { darkMode, toggleTheme } = useTheme();

  return (

    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow">

      <div className="max-w-7xl mx-auto px-8">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >

            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">

              SCM

            </div>

            <div>

              <h2 className="font-bold text-2xl text-slate-900 dark:text-white">
                Smart Contact
              </h2>

              <p className="text-xs text-gray-500 dark:text-gray-300">
                Manager
              </p>

            </div>

          </Link>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center gap-8">

            <Link
              to="/"
              className="font-medium hover:text-blue-600 transition dark:text-white"
            >
              Home
            </Link>

            <Link
              to="/contact"
              className="font-medium hover:text-blue-600 transition dark:text-white"
            >
              Contact
            </Link>

            <Link
              to="/login"
              className="font-medium hover:text-blue-600 transition dark:text-white"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-xl hover:scale-105 transition"
            >
              Signup
            </Link>

            <button
              onClick={toggleTheme}
              className="text-2xl hover:scale-110 transition dark:text-white"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

          </div>

          {/* Mobile Menu Button */}

          <button
            className="md:hidden text-2xl dark:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}

        {menuOpen && (

          <div className="md:hidden flex flex-col gap-5 py-6 bg-white dark:bg-slate-900 rounded-xl mt-3 px-4 shadow-lg">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="dark:text-white"
            >
              Home
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="dark:text-white"
            >
              Contact
            </Link>

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="dark:text-white"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="dark:text-white"
            >
              Signup
            </Link>

            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 dark:text-white"
            >
              {darkMode ? <FaSun /> : <FaMoon />}

              {darkMode ? "Light Mode" : "Dark Mode"}

            </button>

          </div>

        )}

      </div>

    </nav>

  );

}