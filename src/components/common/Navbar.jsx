
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

import {
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar({
  sidebarOpen,
  setSidebarOpen,
}) {

  const [menuOpen, setMenuOpen] = useState(false);

  const { darkMode, toggleTheme } = useTheme();

  return (

    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-20">

          {/* Left */}

          <div className="flex items-center gap-3">

            {setSidebarOpen && (
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden text-2xl text-slate-700 dark:text-white"
              >
                <FaBars />
              </button>
            )}

            <Link
              to="/"
              className="flex items-center gap-3"
            >

              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">

                SCM

              </div>

              <div>

                <h2 className="font-bold text-lg sm:text-2xl text-slate-900 dark:text-white">
                  Smart Contact
                </h2>

                <p className="text-xs text-gray-500 dark:text-gray-300">
                  Manager
                </p>

              </div>

            </Link>

          </div>

          
          {/* Desktop Menu */}

          <div className="hidden md:flex items-center gap-5 lg:gap-8">

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

          <div className="md:hidden mt-3 bg-white dark:bg-slate-900 rounded-2xl shadow-lg px-5 py-5 space-y-4">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block font-medium hover:text-blue-600 dark:text-white"
            >
              Home
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block font-medium hover:text-blue-600 dark:text-white"
            >
              Contact
            </Link>

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block font-medium hover:text-blue-600 dark:text-white"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="block bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-3 rounded-xl hover:scale-105 transition"
            >
              Signup
            </Link>

            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 text-lg dark:text-white"
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





