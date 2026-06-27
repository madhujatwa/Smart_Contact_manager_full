import { useState } from "react";
import { motion } from "framer-motion";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCommentDots,
} from "react-icons/fa";

export default function Contact() {

  const [formData, setFormData] = useState({

    name: "",

    email: "",

    phone: "",

    message: "",

  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({

      ...formData,

      [name]: value,

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Message Sent Successfully ❤️");

    setFormData({

      name: "",

      email: "",

      phone: "",

      message: "",

    });

  };

  return (

    <>

      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-100 min-h-screen">

        <div className="max-w-7xl mx-auto px-8">

          <motion.div

            initial={{ opacity: 0, y: 30 }}

            animate={{ opacity: 1, y: 0 }}

            className="text-center mb-14"

          >

            <h1 className="text-5xl font-bold mb-5">

              Contact Us

            </h1>

            <p className="text-gray-600 text-lg">

              We'd love to hear from you.

            </p>

          </motion.div>

          <div className="grid lg:grid-cols-2 gap-14">
                        {/* Contact Form */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl shadow-xl p-10"
            >

              <h2 className="text-3xl font-bold mb-8">
                Send Message
              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* Name */}

                <div className="flex items-center bg-slate-100 rounded-xl px-4">

                  <FaUser className="text-slate-400" />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full p-4 bg-transparent outline-none"
                    required
                  />

                </div>

                {/* Email */}

                <div className="flex items-center bg-slate-100 rounded-xl px-4">

                  <FaEnvelope className="text-slate-400" />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full p-4 bg-transparent outline-none"
                    required
                  />

                </div>

                {/* Phone */}

                <div className="flex items-center bg-slate-100 rounded-xl px-4">

                  <FaPhone className="text-slate-400" />

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full p-4 bg-transparent outline-none"
                  />

                </div>

                {/* Message */}

                <div className="flex bg-slate-100 rounded-xl px-4">

                  <FaCommentDots className="text-slate-400 mt-5" />

                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write Your Message..."
                    className="w-full p-4 bg-transparent outline-none resize-none"
                    required
                  />

                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transition"
                >
                  Send Message
                </button>

              </form>

            </motion.div>
                        {/* Contact Information */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >

              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-10 shadow-xl">

                <h2 className="text-3xl font-bold mb-6">
                  Get In Touch
                </h2>

                <div className="space-y-5">

                  <div>
                    <h3 className="font-semibold text-lg">
                      📍 Address
                    </h3>

                    <p className="text-blue-100">
                      Smart Contact Manager
                      <br />
                      Jaipur, Rajasthan, India
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      📞 Phone
                    </h3>

                    <p className="text-blue-100">
                      +91 9876543210
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      ✉ Email
                    </h3>

                    <p className="text-blue-100">
                      support@smartcontact.com
                    </p>
                  </div>

                </div>

              </div>

              {/* Map Placeholder */}

              <div className="bg-white rounded-3xl shadow-xl p-10 h-72 flex items-center justify-center">

                <div className="text-center">

                  <h3 className="text-2xl font-bold mb-3">
                    📍 Google Map
                  </h3>

                  <p className="text-gray-500">
                    Google Map Integration Here
                  </p>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      <Footer />

    </>

  );

}