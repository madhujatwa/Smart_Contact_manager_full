
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaSearch,
  FaPlus,
  FaPhone,
  FaEnvelope,
  FaHeart,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import {
  getAllContacts,
  deleteContact,
} from "../../services/contactService";

export default function ViewContacts() {

  const navigate = useNavigate();

  const [contacts, setContacts] = useState([]);

  const [filteredContacts, setFilteredContacts] = useState([]);

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    loadContacts();

  }, []);

const loadContacts = async () => {

  try {

    const data = await getAllContacts();

    setContacts(data);

    setFilteredContacts(data);

  } catch (error) {

    console.log(error);

    alert("Unable To Load Contacts");

  } finally {

    setLoading(false);

  }

};

  useEffect(() => {

    const result = contacts.filter((contact) =>

      contact.name
        ?.toLowerCase()
        .includes(search.toLowerCase())

    );

    setFilteredContacts(result);

  }, [search, contacts]);

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this Contact?"
    );

    if (!confirmDelete) return;

    try {

      await deleteContact(id);

      loadContacts();

    } catch (error) {

      console.log(error);

      alert("Unable To Delete");

    }

  };

  if (loading) {

    return (

      <div className="flex justify-center items-center h-screen">

        <h2 className="text-2xl font-bold">

          Loading Contacts...

        </h2>

      </div>

    );

  }

  return (

    <div className="max-w-7xl mx-auto px-6 py-10">

      <div className="flex flex-col md:flex-row justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">

          My Contacts

        </h1>

        <button

          onClick={() => navigate("/dashboard/add")}

          className="mt-5 md:mt-0 flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white"

        >

          <FaPlus />

          Add Contact

        </button>

      </div>

      <div className="relative mb-8">

        <FaSearch className="absolute left-4 top-4 text-slate-400" />

        <input

          type="text"

          placeholder="Search Contact..."

          value={search}

          onChange={(e) => setSearch(e.target.value)}

          className="w-full pl-12 pr-5 py-4 rounded-xl bg-slate-100 dark:bg-slate-800 outline-none"

        />

      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">


        {filteredContacts.map((contact) => (

          <motion.div

            key={contact.id}

            whileHover={{ y: -5 }}

            className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden"

          >

            {/* Image */}

            <div className="flex justify-center pt-6">

              <img

                src={
                  contact.imageUrl
                    ? contact.imageUrl
                    : "https://i.pravatar.cc/200"
                }

                alt={contact.name}

                className="w-28 h-28 rounded-full border-4 border-blue-500 object-cover"

              />

            </div>

            {/* Content */}

            <div className="p-6 text-center">

              <h2 className="text-2xl font-bold">

                {contact.name}

              </h2>

              <p className="text-slate-500 mt-2">

                {contact.category || "General"}

              </p>

              <div className="mt-6 space-y-3 text-left">

                <div className="flex items-center gap-3">

                  <FaEnvelope className="text-blue-600" />

                  <span>{contact.email}</span>

                </div>

                <div className="flex items-center gap-3">

                  <FaPhone className="text-green-600" />

                  <span>{contact.phoneNumber}</span>

                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">📍</span>

                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    {contact.address || "No Address"}
                  </span>
                </div>

              </div>

              {contact.favorite && (

                <div className="mt-5 flex justify-center">

                  <span className="flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full">

                    <FaHeart />

                    Favorite

                  </span>

                </div>

              )}

              <div className="mt-8 flex justify-center gap-3">

                {/* View */}

                <button
                  onClick={() =>
                    navigate(`/dashboard/contact/${contact.id}`)
                  }
                  className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
                >
                  <FaEye />
                </button>

                {/* Edit */}

                <button
                  onClick={() =>
                    navigate(`/dashboard/edit/${contact.id}`)
                  }
                  className="w-11 h-11 rounded-xl bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition"
                >
                  <FaEdit />
                </button>

                {/* Delete */}

                <button
                  onClick={() => handleDelete(contact.id)}
                  className="w-11 h-11 rounded-xl bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-600 hover:text-white transition"
                >
                  <FaTrash />
                </button>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

      {/* Empty State */}

      {filteredContacts.length === 0 && (

        <div className="text-center mt-20">

          <h2 className="text-3xl font-bold text-slate-500">

            No Contacts Found

          </h2>

          <p className="text-slate-400 mt-3">

            Try searching another name or add a new contact.

          </p>

          <button

            onClick={() => navigate("/dashboard/add")}

            className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white"

          >

            <FaPlus className="inline mr-2" />

            Add Contact

          </button>

        </div>

      )}

    </div>

  );

}


