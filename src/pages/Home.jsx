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

      <section className="min-h-screen bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 flex items-center">

        <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-10 items-center">

          {/* Left */}

          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-6xl font-bold text-white leading-tight">

              Smart Contact

              <span className="block text-yellow-300">

                Manager

              </span>

            </h1>

            <p className="text-white mt-8 text-lg leading-8">

              Organize your personal and professional contacts in
              one beautiful and secure place.

              Manage, Search, Edit and Store your contacts
              effortlessly.

            </p>

            <div className="mt-10 flex gap-5">

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
            className="flex justify-center"
          >

            <div className="relative">

              {/* Main Card */}

              <div className="bg-white rounded-3xl shadow-2xl p-10 w-[430px]">

                <div className="flex items-center gap-4">

                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">

                    <FaAddressBook
                      size={30}
                      className="text-blue-600"
                    />

                  </div>

                  <div>

                    <h2 className="text-2xl font-bold">

                      Contact Manager

                    </h2>

                    <p className="text-gray-500">

                      Store Unlimited Contacts

                    </p>

                  </div>

                </div>

                <div className="mt-10 space-y-5">

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

                animate={{
                  y: [-10, 10, -10],
                }}

                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}

                className="absolute -top-8 -right-8 bg-yellow-300 px-6 py-4 rounded-2xl shadow-xl"

              >

                <h2 className="text-3xl font-bold">

                  1000+

                </h2>

                <p className="font-medium">

                  Contacts Managed

                </p>

              </motion.div>

            </div>

          </motion.div>

        </div>

      </section>
            {/* Features Section */}

      <section className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold">

              Why Choose Smart Contact Manager?

            </h2>

            <p className="text-gray-500 mt-4">

              Everything you need to organize your contacts in one place.

            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition">

              <FaAddressBook
                size={45}
                className="text-blue-600 mb-6"
              />

              <h3 className="text-2xl font-bold mb-4">

                Easy Management

              </h3>

              <p className="text-gray-600 leading-7">

                Add, Edit, Delete and organize all your contacts
                with a beautiful dashboard.

              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition">

              <FaCloud
                size={45}
                className="text-indigo-600 mb-6"
              />

              <h3 className="text-2xl font-bold mb-4">

                Secure Storage

              </h3>

              <p className="text-gray-600 leading-7">

                Your contacts are stored securely and available
                anytime you need them.

              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition">

              <FaUserFriends
                size={45}
                className="text-purple-600 mb-6"
              />

              <h3 className="text-2xl font-bold mb-4">

                Unlimited Contacts

              </h3>

              <p className="text-gray-600 leading-7">

                Save personal, family, office and business
                contacts without limits.

              </p>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>

  );

}