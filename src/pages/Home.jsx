import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import {
  FaAddressBook,
  FaUserFriends,
  FaCloud,
} from "react-icons/fa";

export default function Home() {

  return (

    <>

      <Navbar />


      <section className="min-h-screen bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 flex items-center py-24">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">

              Smart Contact

              <span className="block text-yellow-300">
                Manager
              </span>

            </h1>

            <p className="text-white mt-6 text-base sm:text-lg leading-8 max-w-xl mx-auto lg:mx-0">

              Organize your personal and professional contacts in one beautiful and secure place.

              Manage, Search, Edit and Store your contacts effortlessly.

            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <Link
                to="/register"
                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-700 transition"
              >
                Login
              </Link>

            </div>

          </motion.div>




          {/* Right Side */}

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mt-10 lg:mt-0"
          >

            <div className="relative w-full flex justify-center">

              {/* Main Card */}

              <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 w-full max-w-md">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-100 flex items-center justify-center">

                    <FaAddressBook
                      size={28}
                      className="text-blue-600"
                    />

                  </div>

                  <div>

                    <h2 className="text-xl sm:text-2xl font-bold">
                      Contact Manager
                    </h2>

                    <p className="text-gray-500 text-sm sm:text-base">
                      Store Unlimited Contacts
                    </p>

                  </div>

                </div>

                <div className="mt-8 space-y-5">

                  <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-xl">

                    <FaUserFriends
                      className="text-blue-600"
                      size={24}
                    />

                    <div>

                      <h3 className="font-semibold">
                        Personal Contacts
                      </h3>

                      <p className="text-sm text-gray-500">
                        Family • Friends • Office
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-4 bg-indigo-50 p-4 rounded-xl">

                    <FaCloud
                      className="text-indigo-600"
                      size={24}
                    />

                    <div>

                      <h3 className="font-semibold">
                        Secure Cloud Storage
                      </h3>

                      <p className="text-sm text-gray-500">
                        Access Anytime Anywhere
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              {/* Floating Card */}

              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-4 right-2 sm:-top-6 sm:-right-4 lg:-top-8 lg:-right-8 bg-yellow-300 px-4 py-3 sm:px-6 sm:py-4 rounded-2xl shadow-xl"
              >

                <h2 className="text-2xl sm:text-3xl font-bold">
                  1000+
                </h2>

                <p className="text-sm sm:text-base font-medium">
                  Contacts Managed
                </p>

              </motion.div>

            </div>

          </motion.div>


        </div>

      </section>
      {/* Features Section */}



      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          <div className="text-center mb-12 lg:mb-16">

            <h2 className="text-3xl sm:text-4xl font-bold">
              Why Choose Smart Contact Manager?
            </h2>

            <p className="text-gray-500 mt-4 text-sm sm:text-base">
              Everything you need to organize your contacts in one place.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

            {/* Card 1 */}

            <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 hover:-translate-y-2 transition">

              <FaAddressBook
                size={40}
                className="text-blue-600 mb-6"
              />

              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Easy Management
              </h3>

              <p className="text-gray-600 leading-7 text-sm sm:text-base">
                Add, Edit, Delete and organize all your contacts with a beautiful dashboard.
              </p>

            </div>

            {/* Card 2 */}

            <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 hover:-translate-y-2 transition">

              <FaCloud
                size={40}
                className="text-indigo-600 mb-6"
              />

              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Secure Storage
              </h3>

              <p className="text-gray-600 leading-7 text-sm sm:text-base">
                Your contacts are stored securely and available anytime you need them.
              </p>

            </div>

            {/* Card 3 */}

            <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 hover:-translate-y-2 transition md:col-span-2 lg:col-span-1">

              <FaUserFriends
                size={40}
                className="text-purple-600 mb-6"
              />

              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Unlimited Contacts
              </h3>

              <p className="text-gray-600 leading-7 text-sm sm:text-base">
                Save personal, family, office and business contacts without limits.
              </p>

            </div>

          </div>

        </div>

      </section>


      <Footer />

    </>

  );

}