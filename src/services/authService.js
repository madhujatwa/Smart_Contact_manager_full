import api from "./api";

export const loginUser = async (loginData) => {

    const response = await api.post(
        "/api/users/login",
        loginData
    );

    return response.data;
};

export const registerUser = async (userData) => {

    const response = await api.post(
        "/api/users/signup",
        userData
    );

    return response.data;
};