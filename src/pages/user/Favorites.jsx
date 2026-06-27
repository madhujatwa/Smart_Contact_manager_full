
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaHeart,
  FaPhone,
  FaEnvelope,
  FaEye,
} from "react-icons/fa";

import { getAllContacts } from "../../services/contactService";

export default function Favorites() {

  const navigate = useNavigate();

  const [favorites, setFavorites] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {

    try {

      const user = JSON.parse(localStorage.getItem("user"));

      const data = await getAllContacts(user.userId);

      const fav = data.filter(contact => contact.favorite);

      setFavorites(fav);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);

    }

  };

  if (loading) {

    return (

      <div className="flex justify-center items-center h-screen">

        <h2 className="text-2xl font-bold">

          Loading Favorites...

        </h2>

      </div>

    );

  }

  return (

    <div className="max-w-7xl mx-auto">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold flex items-center gap-3">

          <FaHeart className="text-red-500" />

          Favorite Contacts

        </h1>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">


        {favorites.length === 0 ? (

          <div className="col-span-full">

            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-12 text-center">

              <FaHeart className="text-6xl text-red-300 mx-auto mb-5" />

              <h2 className="text-2xl font-bold mb-3">
                No Favorite Contacts
              </h2>

              <p className="text-slate-500">
                Mark contacts as favorite to see them here.
              </p>

            </div>

          </div>

        ) : (

          favorites.map((contact) => (

            <motion.div
              whileHover={{ y: -5 }}
              key={contact.id}
              className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg overflow-hidden"
            >

              <div className="p-6">

                <div className="flex justify-center">

                  <img
                    src={
                      contact.imageUrl
                        ? contact.imageUrl
                        : "https://ui-avatars.com/api/?name=" + contact.name
                    }
                    alt={contact.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-red-400"
                  />

                </div>

                <div className="text-center mt-4">

                  <h2 className="text-xl font-bold">
                    {contact.name}
                  </h2>

                  <p className="text-slate-500">
                    {contact.email}
                  </p>

                </div>

                <div className="mt-5 space-y-3">

                  <div className="flex items-center gap-3">

                    <FaPhone className="text-blue-500" />

                    <span>{contact.phoneNumber}</span>

                  </div>

                  <div className="flex items-center gap-3">

                    <FaEnvelope className="text-green-500" />

                    <span>{contact.email}</span>

                  </div>

                </div>

                <button
                  onClick={() =>
                    navigate(`/dashboard/contact/${contact.id}`)
                  }
                  className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl flex items-center justify-center gap-2"
                >

                  <FaEye />

                  View Details

                </button>

              </div>

            </motion.div>

          ))

        )}

      </div>

    </div>

  );

}


