
// src/pages/user/Dashboard.jsx

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";import {
  FaAddressBook,
  FaHeart,
  FaUserPlus,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";
import api from "../../services/api";

export default function Dashboard() {

  const [contacts, setContacts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const navigate = useNavigate();

const user = JSON.parse(localStorage.getItem("user"));

const email = user?.email;

useEffect(() => {

  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
    return;
  }

  if (email) {
    loadContacts();
  }

}, [email]);

const loadContacts = async () => {

  try {

   const response = await api.get("/api/contacts");

    setContacts(response.data);

    const fav = response.data.filter(
      (contact) => contact.favorite
    );

    setFavorites(fav);

  } catch (error) {

    console.error(error);

  }

};

  return (

    <div className="max-w-7xl mx-auto">

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
         Welcome,
<span className="text-blue-600">
  {" "}
  {email}
</span>
        </h1>

        <p className="text-slate-500 mt-2">
          Manage all your contacts from one place.
        </p>

      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-3 gap-6">

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-3xl shadow-lg p-6"
        >

          <FaUsers className="text-5xl text-blue-600 mb-4" />

          <h2 className="text-3xl font-bold">
            {contacts.length}
          </h2>

          <p className="text-slate-500">
            Total Contacts
          </p>

        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-3xl shadow-lg p-6"
        >

          <FaHeart className="text-5xl text-red-500 mb-4" />

          <h2 className="text-3xl font-bold">
            {favorites.length}
          </h2>

          <p className="text-slate-500">
            Favorite Contacts
          </p>

        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-3xl shadow-lg p-6"
        >

          <FaAddressBook className="text-5xl text-green-600 mb-4" />

          <h2 className="text-3xl font-bold">
            {contacts.length}
          </h2>

          <p className="text-slate-500">
            Saved Contacts
          </p>

        </motion.div>

      </div>

    

      {/* Quick Actions */}

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        <div className="bg-white rounded-3xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-5">
            Quick Actions
          </h2>

          <div className="space-y-4">

            <Link
              to="/dashboard/add"
              className="flex items-center gap-3 bg-blue-600 text-white p-4 rounded-2xl hover:bg-blue-700 transition"
            >
              <FaUserPlus />
              Add New Contact
            </Link>

            <Link
              to="/dashboard/view"
              className="flex items-center gap-3 bg-green-600 text-white p-4 rounded-2xl hover:bg-green-700 transition"
            >
              <FaAddressBook />
              View All Contacts
            </Link>

            <Link
              to="/dashboard/favorites"
              className="flex items-center gap-3 bg-red-500 text-white p-4 rounded-2xl hover:bg-red-600 transition"
            >
              <FaHeart />
              Favorite Contacts
            </Link>

          </div>

        </div>

        {/* Recent Contacts */}

        <div className="bg-white rounded-3xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-5">
            Recent Contacts
          </h2>

          <div className="space-y-4">

            {contacts.length > 0 ? (

              contacts.slice(0, 5).map((contact) => (

                <div
                  key={contact.id}
                  className="flex items-center justify-between border-b pb-3"
                >

                  <div>

                    <h3 className="font-semibold">
                      {contact.name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {contact.email}
                    </p>

                  </div>

                  <Link
                    to={`/dashboard/contact/${contact.id}`}
                    className="text-blue-600 font-semibold"
                  >
                    View
                  </Link>

                </div>

              ))

            ) : (

              <p className="text-slate-500">
                No Contacts Found
              </p>

            )}

          </div>

        </div>

      </div>

    </div>

  );

}


