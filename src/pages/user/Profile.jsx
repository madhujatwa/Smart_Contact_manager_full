
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaIdBadge,
} from "react-icons/fa";

export default function Profile() {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const data = JSON.parse(localStorage.getItem("user"));

    if (data) {
      setUser(data);
    }

  }, []);

  if (!user) {

    return (

      <div className="flex justify-center items-center h-screen">

        <h2 className="text-2xl font-bold">
          Loading Profile...
        </h2>

      </div>

    );

  }

  return (

    <div className="max-w-6xl mx-auto">

      {/* Header */}

      <div className="mb-10">

        <h1 className="text-4xl font-bold">
          My Profile
        </h1>

        <p className="text-slate-500 mt-2">
          View your account information
        </p>

      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Left Card */}

        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-8"
        >

          <div className="flex flex-col items-center">

            <div className="w-40 h-40 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center text-6xl">

              <FaUser />

            </div>

            <h2 className="text-2xl font-bold mt-6">

              {user.name}

            </h2>

            <p className="text-slate-500 mt-2">

              Contact Manager User

            </p>

          </div>

        </motion.div>

        {/* Right Card */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-8"
        >

          <h2 className="text-2xl font-bold mb-8">

            Account Details

          </h2>


          <div className="space-y-6">

            {/* User ID */}

            <div className="flex items-center gap-5 p-5 rounded-2xl bg-slate-100 dark:bg-slate-800">

              <FaIdBadge className="text-2xl text-blue-600" />

              <div>

                <p className="text-slate-500 text-sm">
                  User ID
                </p>

                <h3 className="font-semibold text-lg">
                  {user.userId}
                </h3>

              </div>

            </div>

            {/* Name */}

            <div className="flex items-center gap-5 p-5 rounded-2xl bg-slate-100 dark:bg-slate-800">

              <FaUser className="text-2xl text-indigo-600" />

              <div>

                <p className="text-slate-500 text-sm">
                  Full Name
                </p>

                <h3 className="font-semibold text-lg">
                  {user.name}
                </h3>

              </div>

            </div>

            {/* Email */}

            <div className="flex items-center gap-5 p-5 rounded-2xl bg-slate-100 dark:bg-slate-800">

              <FaEnvelope className="text-2xl text-green-600" />

              <div>

                <p className="text-slate-500 text-sm">
                  Email Address
                </p>

                <h3 className="font-semibold text-lg">
                  {user.email}
                </h3>

              </div>

            </div>

            {/* Phone */}

            <div className="flex items-center gap-5 p-5 rounded-2xl bg-slate-100 dark:bg-slate-800">

              <FaPhone className="text-2xl text-pink-600" />

              <div>

                <p className="text-slate-500 text-sm">
                  Phone Number
                </p>

                <h3 className="font-semibold text-lg">
                  {user.phone || "Not Available"}
                </h3>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </div>

  );

}

