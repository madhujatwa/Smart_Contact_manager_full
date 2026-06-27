import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {

  return (

<footer className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white transition-all duration-500">
      <div className="max-w-7xl mx-auto px-8 py-14">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo */}

          <div>

<h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              SCM

            </h2>

<p className="mt-5 text-slate-600 dark:text-slate-300 leading-7">
              Smart Contact Manager helps you organize,
              manage and access your contacts securely
              anytime and anywhere.

            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold mb-5">

              Quick Links

            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/"
className="hover:text-blue-500 dark:hover:text-blue-400 transition text-slate-700 dark:text-slate-300"              >
                Home
              </Link>

              <Link
                to="/contact"
className="hover:text-blue-500 dark:hover:text-blue-400 transition text-slate-700 dark:text-slate-300"              >
                Contact
              </Link>

              <Link
                to="/login"
className="hover:text-blue-500 dark:hover:text-blue-400 transition text-slate-700 dark:text-slate-300"              >
                Login
              </Link>

              <Link
                to="/register"
className="hover:text-blue-500 dark:hover:text-blue-400 transition text-slate-700 dark:text-slate-300"              >
                Register
              </Link>

            </div>

          </div>

          {/* Social */}

          <div>

<h3 className="text-xl font-bold mb-5 text-slate-900 dark:text-white">
              Connect With Us

            </h3>

            <div className="flex gap-5 text-3xl">

              <a href="#">
                <FaGithub className="hover:text-blue-400 transition" />
              </a>

              <a href="#">
                <FaLinkedin className="hover:text-blue-400 transition" />
              </a>

              <a href="#">
                <FaInstagram className="hover:text-pink-500 transition" />
              </a>

              <a href="#">
                <FaEnvelope className="hover:text-green-400 transition" />
              </a>

            </div>

          </div>

        </div>

<hr className="my-8 border-slate-300 dark:border-slate-700" />
<div className="text-center text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Smart Contact Manager

          <p className="mt-2">

            Built with ❤️ using React + Spring Boot

          </p>

        </div>

      </div>

    </footer>

  );

}