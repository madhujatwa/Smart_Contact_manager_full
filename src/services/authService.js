import api from "./api";

export const registerUser = async (user) => {
  const response = await api.post("/api/users/signup", user);
  return response.data;
};

export const loginUser = async (user) => {
  const response = await api.post("/api/users/login", user);
  return response.data;
};

export const logoutUser = () => {
  localStorage.clear();
};