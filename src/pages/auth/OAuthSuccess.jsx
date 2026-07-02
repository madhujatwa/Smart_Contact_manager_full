import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function OAuthSuccess() {

  const navigate = useNavigate();

  useEffect(() => {

    const login = async () => {

      const params = new URLSearchParams(window.location.search);

      const token = params.get("token");

      if (!token) {
        navigate("/login");
        return;
      }

      // Save JWT
      localStorage.setItem("token", token);

      try {

        // Current Logged In User
const response = await api.get("/api/users/me");
        localStorage.setItem(
          "user",
          JSON.stringify(response.data)
        );

        localStorage.setItem(
          "email",
          response.data.email
        );

        navigate("/dashboard");

      } catch (error) {

        console.log(error);

        localStorage.clear();

        navigate("/login");

      }

    };

    login();

  }, []);

  return (

    <div className="min-h-screen flex justify-center items-center">

      <h2 className="text-2xl font-bold">
        Logging you in...
      </h2>

    </div>

  );

}