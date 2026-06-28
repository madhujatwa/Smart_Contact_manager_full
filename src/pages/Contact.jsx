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


      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-100 min-h-screen">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10 sm:mb-14"
          >

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5">
              Contact Us
            </h1>

            <p className="text-gray-600 text-base sm:text-lg">
              We'd love to hear from you.
            </p>

          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">


            {/* Contact Form */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10"
            >

              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                Send Message
              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-5 sm:space-y-6"
              >

                {/* Name */}

                <div className="flex items-center bg-slate-100 rounded-xl px-4">

                  <FaUser className="text-slate-400 shrink-0" />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full p-4 bg-transparent outline-none text-sm sm:text-base"
                    required
                  />

                </div>

                {/* Email */}

                <div className="flex items-center bg-slate-100 rounded-xl px-4">

                  <FaEnvelope className="text-slate-400 shrink-0" />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full p-4 bg-transparent outline-none text-sm sm:text-base"
                    required
                  />

                </div>

                {/* Phone */}

                <div className="flex items-center bg-slate-100 rounded-xl px-4">

                  <FaPhone className="text-slate-400 shrink-0" />

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full p-4 bg-transparent outline-none text-sm sm:text-base"
                  />

                </div>

                {/* Message */}

                <div className="flex bg-slate-100 rounded-xl px-4">

                  <FaCommentDots className="text-slate-400 mt-5 shrink-0" />

                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write Your Message..."
                    className="w-full p-4 bg-transparent outline-none resize-none text-sm sm:text-base"
                    required
                  />

                </div>

                <button
                  type="submit"
                  className="w-full py-3 sm:py-4 rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transition"
                >
                  Send Message
                </button>

              </form>

            </motion.div>


            {/* Contact Information */}



            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6 sm:space-y-8"
            >

              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl">

                <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                  Get In Touch
                </h2>

                <div className="space-y-5">

                  <div>
                    <h3 className="font-semibold text-lg">
                      📍 Address
                    </h3>

                    <p className="text-blue-100 text-sm sm:text-base leading-7">
                      Smart Contact Manager
                      <br />
                      Jaipur, Rajasthan, India
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      📞 Phone
                    </h3>

                    <p className="text-blue-100 text-sm sm:text-base">
                      +91 9876543210
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      ✉ Email
                    </h3>

                    <p className="text-blue-100 text-sm sm:text-base break-all">
                      support@smartcontact.com
                    </p>
                  </div>

                </div>

              </div>

              {/* Google Map */}

              <div className="bg-white rounded-3xl shadow-xl h-64 sm:h-72 overflow-hidden">

                <iframe
                  title="Google Map"
                  className="w-full h-full"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Jaipur,Rajasthan&output=embed"
                />

              </div>

            </motion.div>



          </div>

        </div>

      </section>

      <Footer />

    </>

  );

}