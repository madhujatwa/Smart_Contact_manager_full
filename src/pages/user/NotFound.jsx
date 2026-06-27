
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {

  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-950">

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-slate-900 shadow-2xl rounded-3xl p-12 text-center max-w-lg"
      >

        <h1 className="text-8xl font-bold text-blue-600">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-5">
          Page Not Found
        </h2>

        <p className="text-slate-500 mt-4 leading-7">
          Sorry, the page you are looking for doesn't exist
          or has been moved.
        </p>

        <Link
          to="/dashboard"
          className="inline-block mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl hover:scale-105 transition"
        >
          Go To Dashboard
        </Link>

      </motion.div>

    </div>

  );

}

