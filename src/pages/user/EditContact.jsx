
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaHeart,
  FaSave,
} from "react-icons/fa";

import {
  getContactById,
  updateContact,
  uploadImage,
} from "../../services/contactService";

export default function EditContact() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [preview, setPreview] = useState(null);

  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    description: "",
    category: "Friend",
    favorite: false,
    image: null,
  });

  useEffect(() => {
    loadContact();
  }, []);

  const loadContact = async () => {

    try {

      const data = await getContactById(id);

      setFormData({
        name: data.name || "",
        email: data.email || "",
        phone: data.phoneNumber || "",
        website: data.websiteLink || "",
        description: data.description || "",
        category: data.category || "Friend",
        favorite: data.favorite || false,
        image: null,
      });

      if (data.imageUrl) {
        setPreview(data.imageUrl);
      }

      setLoading(false);

    } catch (error) {

      console.log(error);

      alert("Unable to load contact");

    }

  };

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };

  const handleImage = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setPreview(URL.createObjectURL(file));

    setFormData((prev) => ({
      ...prev,
      image: file,
    }));

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const user = JSON.parse(localStorage.getItem("user"));

      const contactData = {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phone,
        websiteLink: formData.website,
        description: formData.description,
        category: formData.category,
        favorite: formData.favorite,
        userId: user.userId,
      };

      await updateContact(id, contactData);

      if (formData.image) {
        await uploadImage(id, formData.image);
      }

      alert("Contact Updated Successfully");

      navigate("/dashboard/view");

    } catch (error) {

      console.log(error);

      alert("Unable to Update Contact");

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

  return (


    <div className="max-w-7xl mx-auto">

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Edit Contact
        </h1>

        <p className="text-slate-500 mt-2">
          Update your contact information
        </p>

      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Left Card */}

        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-8"
        >

          <h2 className="font-bold text-xl mb-5">
            Profile Picture
          </h2>

          <div className="flex flex-col items-center">

            {preview ? (

              <img
                src={preview}
                alt="preview"
                className="w-40 h-40 rounded-full object-cover border-4 border-blue-500"
              />

            ) : (

              <div className="w-40 h-40 rounded-full bg-slate-200 flex items-center justify-center text-5xl">
                <FaUser />
              </div>

            )}

            <label className="mt-5 cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-xl">

              Change Image

              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImage}
              />

            </label>

          </div>

        </motion.div>

        {/* Right Form */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-8"
        >

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <div className="flex items-center bg-slate-100 rounded-xl px-4">

                  <FaUser className="text-slate-400" />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 bg-transparent outline-none"
                  />

                </div>

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Email
                </label>

                <div className="flex items-center bg-slate-100 rounded-xl px-4">

                  <FaEnvelope className="text-slate-400" />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-transparent outline-none"
                  />

                </div>

              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="block mb-2 font-medium">
                  Phone
                </label>

                <div className="flex items-center bg-slate-100 rounded-xl px-4">

                  <FaPhone className="text-slate-400" />

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-4 bg-transparent outline-none"
                  />

                </div>

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Website
                </label>

                <div className="flex items-center bg-slate-100 rounded-xl px-4">

                  <FaGlobe className="text-slate-400" />

                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full p-4 bg-transparent outline-none"
                  />

                </div>

              </div>

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Description
              </label>

              <textarea
                rows="5"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full bg-slate-100 rounded-xl p-4 outline-none"
              />

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="block mb-2 font-medium">
                  Category
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full bg-slate-100 rounded-xl p-4"
                >

                  <option>Friend</option>
                  <option>Family</option>
                  <option>Work</option>
                  <option>Other</option>

                </select>

              </div>

              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    favorite: !prev.favorite,
                  }))
                }
                className={`rounded-xl p-4 flex items-center justify-center gap-2 mt-8 ${
                  formData.favorite
                    ? "bg-red-500 text-white"
                    : "bg-slate-100"
                }`}
              >

                <FaHeart />

                {formData.favorite
                  ? "Favorite"
                  : "Mark Favorite"}

              </button>

            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center gap-2"
            >

              <FaSave />

              Update Contact

            </button>

          </form>

        </motion.div>

      </div>

    </div>

  );

}

