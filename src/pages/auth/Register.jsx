
// src/pages/auth/Register.jsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUserPlus,
} from "react-icons/fa";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { registerUser } from "../../services/authService";
export default function Register() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.error("All fields are required");
      return;
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      toast.error("Passwords do not match");
      return;
    }

    try {

      setLoading(true);

      const response = await registerUser(

        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );

      toast.success("Registration Successful");

      navigate("/login");

    } catch (error) {

      console.log(error);

      toast.error(
        error?.response?.data?.message ||
        "Registration Failed"
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="min-h-screen flex justify-center items-center bg-slate-100">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8"
      >

        <h1 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h1>

        <p className="text-center text-slate-500 mb-8">
          Join Smart Contact Manager
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Name */}

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

            <div className="flex items-center bg-slate-100 rounded-xl px-4">

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



          {/* Password */}

          <div>

            <label className="block mb-2 font-medium">
              Password
            </label>

            <div className="flex items-center bg-slate-100 rounded-xl px-4">

              <FaLock className="text-slate-400" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="w-full p-4 bg-transparent outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

          </div>

          {/* Confirm Password */}

          <div>

            <label className="block mb-2 font-medium">
              Confirm Password
            </label>

            <div className="flex items-center bg-slate-100 rounded-xl px-4">

              <FaLock className="text-slate-400" />

              <input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full p-4 bg-transparent outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
              >
                {showConfirmPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition"
          >

            {loading ? (
              "Please Wait..."
            ) : (
              <>
                <FaUserPlus />
                Register
              </>
            )}

          </button>

        </form>
        {/* Divider */}

        <div className="flex items-center my-6">

          <div className="flex-1 border-t border-gray-300"></div>

          <span className="px-4 text-sm text-gray-500 font-medium">
            OR CONTINUE WITH
          </span>

          <div className="flex-1 border-t border-gray-300"></div>

        </div>

        {/* Google Button */}

        <button
          type="button"
          onClick={() =>
            window.location.href =
            `${import.meta.env.VITE_API_URL}/oauth2/authorization/google`
          }
          className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-xl py-4 font-semibold text-gray-700 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-blue-500 transition-all duration-300"
        >

          {/* Google Logo */}

          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-6 h-6"
          />

          <span>
            Singup with Google
          </span>

        </button>
        <div className="mt-6 text-center">

          <p className="text-slate-500">

            Already have an account?

            <Link
              to="/login"
              className="text-blue-600 ml-2 font-semibold"
            >
              Login
            </Link>

          </p>

        </div>

      </motion.div>

    </div>
  );
}

