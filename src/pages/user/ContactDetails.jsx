import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import {
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaHeart,
  FaEdit,
  FaTrash,
  FaArrowLeft,
  FaStickyNote,
} from "react-icons/fa";

import {
  getContactById,
  deleteContact,
} from "../../services/contactService";

export default function ContactDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [contact, setContact] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadContact();
  }, []);

  const loadContact = async () => {

    try {

      const data = await getContactById(id);

      setContact(data);

    } catch (error) {

      console.log(error);

      alert("Unable To Load Contact");

    } finally {

      setLoading(false);

    }

  };

  const handleDelete = async () => {

    const confirmDelete = window.confirm(
      "Delete this contact?"
    );

    if (!confirmDelete) return;

    try {

      await deleteContact(id);

      alert("Contact Deleted Successfully");

      navigate("/dashboard/view");

    } catch (error) {

      console.log(error);

      alert("Unable To Delete Contact");

    }

  };

  if (loading) {

    return (

      <div className="flex justify-center items-center h-screen">

        <h2 className="text-2xl font-bold">

          Loading Contact...

        </h2>

      </div>

    );

  }

  if (!contact) {

    return (

      <div className="flex justify-center items-center h-screen">

        <h2 className="text-2xl font-bold">

          Contact Not Found

        </h2>

      </div>

    );

  }

  return (

    <div className="max-w-7xl mx-auto px-6 py-10">

      <div className="flex justify-between items-center mb-8">

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-200 hover:bg-slate-300"
        >

          <FaArrowLeft />

          Back

        </button>

        <h1 className="text-4xl font-bold">

          Contact Details

        </h1>

      </div>

      <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Profile Card */}

        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden"
        >

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-28"></div>

          <div className="flex justify-center -mt-16">

            <img
              src={
                contact.imageUrl
                  ? contact.imageUrl
                  : "https://i.pravatar.cc/200"
              }
              alt={contact.name}
              className="w-36 h-36 rounded-full border-4 border-white object-cover shadow-xl"
            />

          </div>

          <div className="p-8 text-center">

            <h2 className="text-3xl font-bold">
              {contact.name}
            </h2>

            <p className="text-slate-500 mt-2">
              Smart Contact
            </p>

            {contact.favorite && (

              <div className="mt-5">

                <span className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-5 py-2 rounded-full">

                  <FaHeart />

                  Favorite Contact

                </span>

              </div>

            )}

          </div>

        </motion.div>



        {/* Right Contact Info */}

        <div className="lg:col-span-2 space-y-8">

          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-8">

            <h2 className="text-2xl font-bold mb-6">

              Contact Information

            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="text-slate-500 text-sm">

                  Email

                </label>

                <div className="flex items-center gap-3 mt-2">

                  <FaEnvelope className="text-blue-600" />

                  <span>{contact.email}</span>

                </div>

              </div>

              <div>

                <label className="text-slate-500 text-sm">

                  Phone Number

                </label>

                <div className="flex items-center gap-3 mt-2">

                  <FaPhone className="text-green-600" />

                  <span>{contact.phoneNumber}</span>

                </div>

              </div>

              <div>

                <label className="text-slate-500 text-sm">

                  Website

                </label>

                <div className="flex items-center gap-3 mt-2">

                  <FaGlobe className="text-indigo-600" />

                  <span>

                    {contact.websiteLink || "Not Available"}

                  </span>

                </div>

              </div>

              <div>

                <label className="text-slate-500 text-sm">

                  Address

                </label>

                <div className="flex items-center gap-3 mt-2">

                  <FaMapMarkerAlt className="text-red-500" />

                  <span>

                    {contact.address || "Not Available"}

                  </span>

                </div>

              </div>

            </div>

          </div>
                    {/* Description */}

          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-8">

            <h2 className="text-2xl font-bold flex items-center gap-3 mb-5">

              <FaStickyNote className="text-yellow-500" />

              Description

            </h2>

            <p className="text-slate-600 dark:text-slate-300 leading-8">

              {contact.description
                ? contact.description
                : "No Description Available"}

            </p>

          </div>

          {/* Actions */}

          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-8">

            <h2 className="text-2xl font-bold mb-6">

              Actions

            </h2>

            <div className="flex flex-wrap gap-5">

              <button

                onClick={() =>
                  navigate(`/dashboard/edit/${contact.id}`)
                }

                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition"

              >

                <FaEdit />

                Edit Contact

              </button>

              <button

                onClick={handleDelete}

                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white transition"

              >

                <FaTrash />

                Delete Contact

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}