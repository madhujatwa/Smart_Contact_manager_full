
// src/pages/auth/Login.jsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaSignInAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

  if (!formData.email || !formData.password) {
    toast.error("All fields are required");
    return;
  }

  try {

    setLoading(true);

    const response = await axios.post(
      "http://localhost:8080/api/users/login",
      formData
    );

    const data = response.data;

    // Save user object
    localStorage.setItem("user", JSON.stringify(data));

    // Save email separately (Dashboard ke liye)
    localStorage.setItem("email", data.email);

    // Future JWT support
    if (data.token) {
      localStorage.setItem("token", data.token);
    }

    toast.success("Login Successful");

    navigate("/dashboard");

  } catch (error) {

    console.log(error);

    toast.error(
      error?.response?.data?.message ||
      "Invalid Email or Password"
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
          Welcome Back
        </h1>

        <p className="text-center text-slate-500 mb-8">
          Login to Smart Contact Manager
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

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
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
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
                {showPassword
                  ? <FaEyeSlash />
                  : <FaEye />}
              </button>

            </div>

          </div>

          <div className="flex justify-between items-center">

            <label className="flex items-center gap-2">

              <input
                type="checkbox"
              />

              Remember Me

            </label>

            <Link
              to="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>

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
                <FaSignInAlt />
                Login
              </>
            )}

          </button>

        </form>

        <div className="mt-6 text-center">

          <p className="text-slate-500">

            Don't have an account?

            <Link
              to="/register"
              className="text-blue-600 ml-2 font-semibold"
            >
              Register
            </Link>

          </p>

        </div>

      </motion.div>

    </div>
  );
}

