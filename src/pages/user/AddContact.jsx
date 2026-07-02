
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaHeart,
  FaSave,
} from "react-icons/fa";

import {
  addContact,
  uploadImage,
} from "../../services/contactService";

export default function AddContact() {

  const navigate = useNavigate();

  const [preview, setPreview] = useState(null);

  const [formData, setFormData] = useState({
   name: "",
  email: "",
  phone: "",
  address: "",
  website: "",
  description: "",
  category: "Friend",
  favorite: false,
  image: null,
  });

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

  address: formData.address,

  websiteLink: formData.website,

  description: formData.description,

  favorite: formData.favorite,

  imageUrl: "",

  userId: user.userId,

  linkedInLink: "",

  socialLinks: []

};

      const savedContact = await addContact(contactData);

      if (formData.image) {
        await uploadImage(savedContact.id, formData.image);
      }

     toast.success("Contact Added Successfully");

      navigate("/dashboard/view");

    } catch (error) {

      console.log(error);

      alert("Unable To Save Contact");

    }

  };

  return (

  
<div className="max-w-7xl mx-auto">

  {/* Header */}

  <div className="mb-8">

    <h1 className="text-4xl font-bold">
      Add New Contact
    </h1>

    <p className="text-slate-500 mt-2">
      Create and organize your contacts professionally
    </p>

  </div>

  <div className="grid lg:grid-cols-3 gap-8">

    {/* Left Side */}

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
            alt="Preview"
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-500"
          />

        ) : (

          <div className="w-40 h-40 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-5xl">
            <FaUser />
          </div>

        )}

        <label className="mt-5 cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-xl">

          Upload Image

          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleImage}
          />

        </label>

        {/* Live Preview */}

        <div className="w-full mt-8 bg-slate-50 dark:bg-slate-800 rounded-2xl p-5">

          <h3 className="font-bold mb-4">
            Live Preview
          </h3>

          <div className="text-center">

            <h4 className="font-bold text-lg">
              {formData.name || "Contact Name"}
            </h4>

            <p className="text-sm text-slate-500">
              {formData.email || "email@example.com"}
            </p>

            <p className="text-sm text-slate-500 mt-1">
              {formData.phone || "+91 9876543210"}
            </p>

            <span className="inline-block mt-4 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm">
              {formData.category}
            </span>

          </div>

        </div>

      </div>

    </motion.div>

    {/* Right Side */}

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

          {/* Name */}

          <div>

            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl px-4">

              <FaUser className="text-slate-400" />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Full Name"
                className="w-full p-4 bg-transparent outline-none"
              />

            </div>

          </div>

          {/* Email */}

          <div>

            <label className="block mb-2 font-medium">
              Email
            </label>

            <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl px-4">

              <FaEnvelope className="text-slate-400" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="w-full p-4 bg-transparent outline-none"
              />

            </div>

          </div>

        </div>


        <div className="grid md:grid-cols-2 gap-6">

          {/* Phone */}

          <div>

            <label className="block mb-2 font-medium">
              Phone Number
            </label>

            <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl px-4">

              <FaPhone className="text-slate-400" />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Phone Number"
                className="w-full p-4 bg-transparent outline-none"
              />

            </div>

          </div>

          {/* Website */}

          <div>

            <label className="block mb-2 font-medium">
              Website
            </label>

            <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl px-4">

              <FaGlobe className="text-slate-400" />

              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Enter Website Link"
                className="w-full p-4 bg-transparent outline-none"
              />

            </div>

          </div>

        </div>
        <div>

  <label className="block mb-2 font-medium">
    Address
  </label>

  <input
    type="text"
    name="address"
    value={formData.address}
    onChange={handleChange}
    placeholder="Enter Address"
    className="w-full bg-slate-100 dark:bg-slate-800 rounded-xl p-4 outline-none"
  />

</div>

        {/* Description */}

        <div>

          <label className="block mb-2 font-medium">
            Description
          </label>

          <textarea
            rows="5"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write something about this contact..."
            className="w-full bg-slate-100 dark:bg-slate-800 rounded-xl p-4 outline-none resize-none"
          />

        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center">

          {/* Category */}

          <div>

            <label className="block mb-2 font-medium">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-slate-100 dark:bg-slate-800 rounded-xl p-4 outline-none"
            >

              <option value="Friend">Friend</option>
              <option value="Family">Family</option>
              <option value="Work">Work</option>
              <option value="Business">Business</option>
              <option value="Other">Other</option>

            </select>

          </div>

          {/* Favorite */}

          <div className="flex items-end h-full">

            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  favorite: !prev.favorite,
                }))
              }
              className={`w-full p-4 rounded-xl flex items-center justify-center gap-2 transition ${
                formData.favorite
                  ? "bg-red-500 text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700"
              }`}
            >

              <FaHeart />

              {formData.favorite
                ? "Marked as Favorite"
                : "Mark as Favorite"}

            </button>

          </div>

        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition"
        >

          <FaSave />

          Save Contact

        </button>

      </form>

    </motion.div>

  </div>

</div>

  );
}


